import { useState, useEffect } from "react";
import "./NewCustomerForm.css";
import ceb from "../../assets/img/ceb.png"
import axios from 'axios';
// Step Components
import {CustomerDetails} from "../Forms/StepperComponents/CustomerDetails";
import {ContactPersonDetails} from "../Forms/StepperComponents/ContactPersonDetails.js";
import {ServiceLocationDetails} from "../Forms/StepperComponents/ServiceLocationDetails";
import {ConnectionDetails} from "../Forms/StepperComponents/ConnectionDetails";

const NewCustomerStepper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [completedTabs, setCompletedTabs] = useState(Array(4).fill(false));
  const [customerExists, setCustomerExists] = useState(false);


  // Customer Details state
  const [customerDetails, setCustomerDetails] = useState({
    id: "",
    type: "personal",
    idType: "NIC",
    fullName: "",
    firstName: "",
    lastName: "",
    suburb:"",
    streetAddress: "",
    city: "",
    postalCode: "",
    telephoneNo: "",
    mobileNo: "",
    email: "",
    prefferedLanguage: "",
  });

  // Contact Person Details state
  const [contactPersonDetails, setContactPersonDetails] = useState({
    pid: "",
    pname: "",
    paddress: "",
    ptelephoneNo: "",
    pmobileNo: "",
    pemail: "",
  });

  // Service Location Details state
  const [serviceLocationDetails, setServiceLocationDetails] = useState({
    province: "",
    area: "",
    csc: "",
    saddress: "",
    shouseNo: "",
    scity: "",
    spostalcode: "",
    assestmentNo: "",
    neigbourAcc: "",
    ownership: "",
  });

  // Connection Details state
  const [connectionDetails, setConnectionDetails] = useState({
    phase: "",
    connectionType: "",
    customerCat: "",
    tariffCode: "",
    tariffCategeory: "",
    disturbance: "",
  });

  // Generic handlers for form state updates
  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleContactPersonDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactPersonDetails({ ...contactPersonDetails, [name]: value });
  };

  const handleServiceLocationDetailsChange = (e) => {
    const { name, value } = e.target;
    setServiceLocationDetails({ ...serviceLocationDetails, [name]: value });
  };

  const handleConnectionDetailsChange = (e) => {
    const { name, value } = e.target;
    setConnectionDetails({ ...connectionDetails, [name]: value });
  };

  // Check if a form is completed - basic validation
  const isFormCompleted = (formData, requiredFields) => {
    if (!requiredFields || requiredFields.length === 0) return true;
    return requiredFields.every((field) => formData[field] !== "" && formData[field] !== undefined);
  };

  const fetchCustomerById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8082/api/applicants/${id}`);
      if (response.data) {
        setCustomerExists(true);
        setCustomerDetails({
          ...response.data,
          mobileNo: response.data.mobileNo || "",
          email: response.data.email || ""
        });
      } else {
        setCustomerExists(false);
      }
    } catch (error) {
      setCustomerExists(false);
      console.error("Error fetching customer:", error);
    }
  };

  // Add this useEffect for auto-search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (customerDetails.id && customerDetails.id.length > 5) {
        fetchCustomerById(customerDetails.id);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [customerDetails.id]);




  // Update completed steps when form changes
  useEffect(() => {
    const requiredCustomerFields = ["id", "fullName", "firstName", "lastName", "mobileNo"];
    const requiredContactFields = ["pname"];
    const requiredLocationFields = ["province", "area", "csc"];
    const requiredConnectionFields = ["phase", "connectionType"];

    setCompletedTabs([
      isFormCompleted(customerDetails, requiredCustomerFields),
      isFormCompleted(contactPersonDetails, requiredContactFields),
      isFormCompleted(serviceLocationDetails, requiredLocationFields),
      isFormCompleted(connectionDetails, requiredConnectionFields),
    ]);
  }, [customerDetails, contactPersonDetails, serviceLocationDetails, connectionDetails]);

  const handleSubmit = async () => {
    // Basic validation for required fields
    if (!customerDetails.id || !customerDetails.fullName) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      customerDetails,
      serviceLocationDetails,
      connectionDetails,
      contactPersonDetails,
     
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch("http://localhost:8081/api/newconnection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting application");
    }
  };

  const tabs = [
    {
      name: "Customer Details",
      content: (
        <CustomerDetails
          formData={customerDetails}
          handleChange={handleCustomerDetailsChange}
          setFormData={setCustomerDetails}
          customerExists={customerExists}
        />
      ),
    },
    {
      name: "Service Location Details",
      content: (
        <ServiceLocationDetails
          formData={serviceLocationDetails}
          handleChange={handleServiceLocationDetailsChange}
        />
      ),
    },
    {
      name: "Connection Details",
      content: (
        <ConnectionDetails
          formData={connectionDetails}
          handleChange={handleConnectionDetailsChange}
          handleSubmit={handleSubmit}
        />
      ),
    },
    {
      name: "Contact Person Details",
      content: (
        <ContactPersonDetails
          formData={contactPersonDetails}
          handleChange={handleContactPersonDetailsChange}
        />
      ),
    },
  ];

  const handleNext = () => {
    if(activeTab===0){
      console.log(customerDetails)
    if(!customerDetails.fullName||!customerDetails.firstName||!customerDetails.lastName||!customerDetails.streetAddress||!customerDetails.suburb||!customerDetails.city||!customerDetails.postalCode||!customerDetails.mobileNo){
      alert("please fill the required fields")
      return;
    }}
    else if(activeTab===1){
      console.log(serviceLocationDetails);
      if(!serviceLocationDetails.shouseNo||!serviceLocationDetails.saddress||!serviceLocationDetails.scity||!serviceLocationDetails.area||!serviceLocationDetails.csc){
        alert("please fill the required fieldsss")
        return;
      }
    }
    const currentTab = tabs[activeTab];

    // Validate current tab data if needed
    if (
      currentTab.content.props?.formData &&
      !isFormCompleted(currentTab.content.props.formData, [])
    ) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
  
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="dashboard-header">
          <h1>New Connection Application Form</h1>
          <div className="ceb-logo">
            <img src={ceb} alt="ceb-logo"></img>
          </div>
        </div>

        <div className="form-container">
          <div className="flex flex-col min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-6xl mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-1">
                {/* Stepper */}
                <div className="flex justify-between items-center mb-4 mt-4 relative w-full">
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      className="relative flex-1 flex flex-col items-center "
                    >
                      {/* Draw connecting line */}
                      {index > 0 && (
                        <div
                          className={`absolute top-1/2 left-0 transform -translate-y-1/2 h-3 w-full  ${
                            completedTabs[index - 1]
                              ? "bg-emerald-400"
                              : "bg-gray-300"
                          }`}
                          style={{ zIndex: -1}}
                        ></div>
                      )}
                      {/* Step circle */}
                      <div
                        className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                          completedTabs[index]
                            ? "bg-emerald-400 text-white border-blue-600"
                            : index === activeTab
                            ? "bg-red-400 text-white border-orange-600"
                            : "border-gray-400"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-xs mt-2">{tab.name}</span>
                    </div>
                  ))}
                  
                </div>

                

                <div className="ml-0 p-0 bg-blueGray-100">
                <h6 className=" py-0 text-xl text-center font-bold text-blueGray-700">
                    {tabs[activeTab].name}
                  </h6>
                  <div className="p-2 rounded w-full max-w-5xl">{tabs[activeTab].content}</div>
                </div>
                <div className="flex justify-between items-center mb-1">
                 
                  <div className="form-row-button">
                    {activeTab > 0 && (
                      <button
                        onClick={handlePrev}
                        className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3  rounded shadow hover:shadow-md transition duration-150"
                      >
                        Previous
                      </button>
                    )}

                    {activeTab < tabs.length - 1 ? (
                      <button
                        onClick={handleNext}
                        className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md transition duration-150"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerStepper;
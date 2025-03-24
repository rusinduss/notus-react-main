import { useState, useEffect } from "react";

const GeneralInfo = ({ handleChange, formData }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/estimation/references")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched data:", data); // check what data is fetched
        if (Array.isArray(data)) {
          setApplications(data);
          console.log("fetched applications:", data); // log applications data
        } else {
          console.error("unexpected data format:", data);
          setError("invalid data format received");
        }
      })
      .catch((error) => {
        console.error("error fetching application references:", error);
        setError("failed to load applications");
      })
      .finally(() => setLoading(false));
  }, []);
  

  const handleSelectChange = (e) => {
    const selectedApp = applications.find(
      (app) => app.appNo === e.target.value
    );
    if (selectedApp) {
      handleChange({ target: { name: "appNo", value: selectedApp.appNo } });
      handleChange({ target: { name: "stdNo", value: selectedApp.stdNo } });
      handleChange({ target: { name: "deptId", value: selectedApp.deptId } });
      handleChange({
        target: { name: "jobDescription", value: selectedApp.jobDescription },
      });
      handleChange({
        target: { name: "beneficiaries", value: selectedApp.beneficiaries },
      });
      handleChange({
        target: { name: "powerSupply", value: selectedApp.powerSupply },
      });
      handleChange({
        target: { name: "rejectedReason", value: selectedApp.rejectedReason },
      });
    }
  };

  return (
    <form>
      <div className="flex flex-wrap">
        {/* Application Reference No Dropdown */}
        <div className="w-full lg:w-6/12 px-4 py-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            application reference no
          </label>
          {loading ? (
            <p className="text-gray-500">loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <select
              name="appNo"
              value={formData.appNo}
              onChange={handleSelectChange}
              className="border px-3 py-2 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full"
              style={{ color: "black", backgroundColor: "white" }}
            >
              <option value="">select application</option>
              {applications.length > 0 ? (
                applications.map((app, index) => (
                  <option
                    key={index}
                    value={app.appNo}
                    style={{ color: "black" }}
                  >
                    {app.appNo ? app.appNo : "missing appNo"}

                  </option>
                ))
              ) : (
                <option disabled>no applications found</option>
              )}
            </select>
          )}
        </div>

        {/* Other Fields */}
        {[
          { label: "name", name: "stdNo" },
          { label: "address", name: "deptId" },
          { label: "job description", name: "jobDescription" },
          { label: "no of beneficiaries", name: "beneficiaries" },
          { label: "power to supply", name: "powerSupply" },
          { label: "rejected reason", name: "rejectedReason" },
        ].map((field) => (
          <div key={field.name} className="w-full lg:w-6/12 px-4 py-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              {field.label}
            </label>
            <input
             type="text"
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="border px-3 py-2 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full"
              style={{ color: "black", backgroundColor: "white" }}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default GeneralInfo;

import React from "react";

const CustomerDetails = ({ formData, handleChange }) => {
  // Function for automatically selecting the radio of idtype
  function handleSelectIdType() {
    var selectValue = document.getElementById("type").value;
    if (selectValue === "personal") {
      document.getElementById("NIC").checked = true;
    } else if (selectValue === "corporate") {
      document.getElementById("BusRegNo").checked = true;
    } else {
      document.getElementById("NIC").checked = false;
      document.getElementById("BusRegNo").checked = false;
    }
  }

  return (
    <div className="dashboard-card">
      <div className="form-box">
        <div className="form-box-inner">
          <div className="form-group">
            <label className="form-label required" htmlFor="id">ID:</label>
            <input 
              type="text" 
              id="id" 
              name="id" 
              className="form-input" 
              required
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Personal/Corporate</label>
            <select 
              id="type" 
              name="type" 
              className="form-select" 
              onChange={(e) => {
                handleSelectIdType();
                handleChange(e);
              }}
              value={formData.type}
            >
              <option value="personal">Personal</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <label className="form-label" htmlFor="IdType">ID Type:</label>&nbsp;&nbsp;
          <div className="radio-group">
         
            <input 
              type="radio" 
              id="NIC" 
              name="idType" 
              value="NIC" 
              className="radio-input"
              checked={formData.idType === "NIC"}
              onChange={handleChange}
            />   <label htmlFor="NIC" className="radio-label">NIC</label>
            &nbsp;
           
            <input 
              type="radio" 
              id="BusRegNo" 
              name="idType" 
              value="BussinessRegNo" 
              className="radio-input"
              checked={formData.idType === "BussinessRegNo"}
              onChange={handleChange}
            />
             <label htmlFor="BusRegNo" className="radio-label">Business Reg No</label>
          </div>
        </div>
        <div className="form-group">
            <label className="form-label required" htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        <div className="form-box-inner">
       
          <div className="form-group">
            <label className="form-label required" htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label required" htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-box-inner">
          <div className="form-group">
            <label className="form-label" htmlFor="streetAddress">Street Address:</label>
            <input 
              type="text" 
              id="streetAddress" 
              name="streetAddress" 
              className="form-input"
              value={formData.streetAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="suburb">SubUrb:</label>
            <input 
              type="text" 
              id="suburb" 
              name="suburb" 
              className="form-input"
              value={formData.suburb}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="city">City:</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              className="form-input"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="postalCode">Postal Code:</label>
            <input 
              type="text" 
              id="postalCode" 
              name="postalCode" 
              className="form-input"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-box-inner">
          <div className="form-group">
            <label className="form-label" htmlFor="telephoneNo">Telephone No:</label>
            <input 
              type="tel" 
              id="telephoneNo" 
              name="telephoneNo" 
              className="form-input" 
              placeholder="07xxxxxxxx"
              value={formData.telephoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label required" htmlFor="mobileNo">Mobile No:</label>
            <input 
              type="tel" 
              id="mobileNo" 
              name="mobileNo" 
              className="form-input" 
              placeholder="07xxxxxxxx" 
              pattern="[0-9]{10}" 
              required
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <label className="form-label" htmlFor="language">Preferred Language:</label>
          <div className="radio-group">
            <label className="radio-label">Sinhala</label>
            <input 
              type="radio" 
              name="language" 
              value="sinhala" 
              className="radio-input"
              checked={formData.language === "sinhala"}
              onChange={handleChange}
            />
            &nbsp;&nbsp;
            <label className="radio-label">Tamil</label>
            <input 
              type="radio" 
              name="language" 
              value="tamil" 
              className="radio-input"
              checked={formData.language === "tamil"}
              onChange={handleChange}
            />
            &nbsp;&nbsp;
            <label className="radio-label">English</label>
            <input 
              type="radio" 
              name="language" 
              value="english" 
              className="radio-input"
              checked={formData.language === "english"}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export {CustomerDetails};
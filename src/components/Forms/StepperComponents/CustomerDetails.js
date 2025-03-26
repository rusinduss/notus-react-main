import React, { useEffect } from "react";

const CustomerDetails = ({ formData, handleChange, customerExists }) => {
 // Function for automatically selecting the radio of idtype
  function handleSelectIdType() {
    var selectValue = document.getElementById("type").value;
    if (selectValue === "PER") {
      document.getElementById("NIC").checked = true;
    } else if (selectValue === "COR") {
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
            <label className="form-label required" htmlFor="id">
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="form-input"
              required
              value={formData.id}
              onChange={handleChange}
              disabled={customerExists}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Personal/Corporate</label>
            <select
              id="type"
              name="personalCorporate"
              className="form-select"
              onChange={(e) => {
                handleSelectIdType();
                handleChange(e);
              }}
              value={formData.personalCorporate}
              disabled={customerExists}
            >
              <option value="PER">Personal</option>
              <option value="COR">Corporate</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="IdType">
            ID Type:
          </label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                id="NIC"
                name="idType"
                value="NIC"
                className="radio-input"
                checked={formData.idType === "NIC"}
                onChange={handleChange}
                disabled={customerExists}
              />
              <span>NIC</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                id="BusRegNo"
                name="idType"
                value="BussinessRegNo"
                className="radio-input"
                checked={formData.idType === "BussinessRegNo"}
                onChange={handleChange}
                disabled={customerExists}
              />
              <span>Business Reg No</span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label required" htmlFor="fullName">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
            required
            value={formData.fullName}
            onChange={handleChange}
            readOnly={customerExists}
          />
        </div>
        <div className="form-box-inner">
          <div className="form-group">
            <label className="form-label required" htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              required
              value={formData.firstName}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
          <div className="form-group">
            <label className="form-label required" htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
              required
              value={formData.lastName}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
        </div>

        <div className="form-box-inner">
          <div className="form-group">
            <label className="form-label" htmlFor="streetAddress">
              Street Address:
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              className="form-input"
              value={formData.streetAddress}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="suburb">
              SubUrb:
            </label>
            <input
              type="text"
              id="suburb"
              name="suburb"
              className="form-input"
              value={formData.suburb}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="city">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="postalCode">
              Postal Code:
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="form-input"
              value={formData.postalCode}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
        </div>

        <div className="form-box-inner">
          <div className="form-group">
            <label className="form-label" htmlFor="telephoneNo">
              Telephone No:
            </label>
            <input
              type="tel"
              id="telephoneNo"
              name="telephoneNo"
              className="form-input"
              placeholder="07xxxxxxxx"
              value={formData.telephoneNo}
              onChange={handleChange}
              readOnly={customerExists}
            />
          </div>
          <div className="form-group">
            <label className="form-label required" htmlFor="mobileNo">
              Mobile No:
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              className="form-input"
              placeholder="07xxxxxxxx"
              pattern="07[0-9]{8}"
              title="Phone number must start with 07 and be 10 digits total"
              required
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
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
          <label
            className="form-label"
            htmlFor="language"
            style={{ minWidth: "120px" }}
          >
            Preferred Language:
          </label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="language"
                value="sinhala"
                className="radio-input"
                checked={formData.preferredLanguage === "SI"}
                onChange={handleChange}
                disabled={customerExists}
              />
              <span>Sinhala</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="language"
                value="tamil"
                className="radio-input"
                checked={formData.language === "tamil"}
                onChange={handleChange}
                disabled={customerExists}
              />
              <span>Tamil</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="language"
                value="english"
                className="radio-input"
                checked={formData.language === "english"}
                onChange={handleChange}
                disabled={customerExists}
              />
              <span>English</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CustomerDetails };
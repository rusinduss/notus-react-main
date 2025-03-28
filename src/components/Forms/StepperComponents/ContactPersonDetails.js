import React, { useState, useEffect } from "react";

const ContactPersonDetails = ({ formData, setFormData, handleChange, customerData }) => {
  const [isSelected, setIsSelected] = useState(false);

  // Create state to manage manually entered data
  const [manualData, setManualData] = useState({
    pid: formData.pid,
    pname: formData.pname,
    paddress: formData.paddress,
    ptelephoneNo: formData.ptelephoneNo,
    pmobileNo: formData.pmobileNo,
    pemail: formData.pemail,
  });

  // Handles the checkbox selection to copy customer data
  const handleselect = () => {
    setIsSelected((prevState) => {
      const newState = !prevState;

      if (newState) {
        // When checkbox is selected, copy customer details to form data
        setFormData({
          ...formData,
          pid: customerData.id,
          pname: customerData.fullName,
          paddress: customerData.streetAddress,
          ptelephoneNo: customerData.telephoneNo,
          pmobileNo: customerData.mobileNo,
          pemail: customerData.email,
        });
        // Update manual data state with customer data
        setManualData({
          pid: customerData.id,
          pname: customerData.fullName,
          paddress: customerData.streetAddress,
          ptelephoneNo: customerData.telephoneNo,
          pmobileNo: customerData.mobileNo,
          pemail: customerData.email,
        });
      } else {
        // When checkbox is unselected, clear both form data and manual data
        setFormData({
          ...formData,
          pid: '',
          pname: '',
          paddress: '',
          ptelephoneNo: '',
          pmobileNo: '',
          pemail: '',
        });
        setManualData({
          pid: '',
          pname: '',
          paddress: '',
          ptelephoneNo: '',
          pmobileNo: '',
          pemail: '',
        });
      }

      return newState;
    });
  };

  return (
    <div className="form-box">
      <div className="checkbox-label">
        <label>
          <input
            type="checkbox"
            className="checkbox-input"
            checked={isSelected}
            onChange={handleselect}
          />
          <span><b>Same as Customer Details</b></span>
        </label>
      </div>
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label" htmlFor="pid">ID:</label>
          <input
            type="text"
            id="pid"
            name="pid"
            className="form-input"
            value={manualData.pid}
            onChange={(e) => setManualData({ ...manualData, pid: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="pname">Contact Name:</label>
          <input
            type="text"
            id="pname"
            name="pname"
            className="form-input"
            value={manualData.pname}
            onChange={(e) => setManualData({ ...manualData, pname: e.target.value })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="paddress">Contact Address:</label>
          <input
            type="text"
            id="paddress"
            name="paddress"
            className="form-input"
            value={manualData.paddress}
            onChange={(e) => setManualData({ ...manualData, paddress: e.target.value })}
          />
        </div>
      </div>
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label" htmlFor="ptelephoneNo">Telephone No:</label>
          <input
            type="tel"
            id="ptelephoneNo"
            name="ptelephoneNo"
            className="form-input"
            value={manualData.ptelephoneNo}
            onChange={(e) => setManualData({ ...manualData, ptelephoneNo: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="pmobileNo">Mobile no:</label>
          <input
            type="tel"
            id="pmobileNo"
            name="pmobileNo"
            className="form-input"
            value={manualData.pmobileNo}
            onChange={(e) => setManualData({ ...manualData, pmobileNo: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="pemail">Email:</label>
        <input
          type="email"
          id="pemail"
          name="pemail"
          className="form-input"
          value={manualData.pemail}
          onChange={(e) => setManualData({ ...manualData, pemail: e.target.value })}
        />
      </div>
    </div>
  );
};

export { ContactPersonDetails };

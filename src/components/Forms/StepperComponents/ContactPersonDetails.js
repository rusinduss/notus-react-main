import React from "react";

const ContactPersonDetails = ({ formData, handleChange }) => {
  return (
    <div className="form-box">
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label" htmlFor="pid">ID:</label>
          <input 
            type="text" 
            id="pid" 
            name="pid" 
            className="form-input"
            value={formData.pid}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="pname">Contact Name:</label>
          <input 
            type="text" 
            id="pname" 
            name="pname" 
            className="form-input"
            value={formData.pname}
            onChange={handleChange}
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
            value={formData.paddress}
            onChange={handleChange}
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
            value={formData.ptelephoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="pmobileNo">Mobile no:</label>
          <input 
            type="tel" 
            id="pmobileNo" 
            name="pmobileNo" 
            className="form-input"
            value={formData.pmobileNo}
            onChange={handleChange}
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
          value={formData.pemail}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export{ContactPersonDetails, }

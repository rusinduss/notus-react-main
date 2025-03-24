
import React from "react";

const ServiceLocationDetails = ({ formData, handleChange }) => {
  return (
    <div className="form-box">
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label">Select your Area</label>
          <select 
            id="area" 
            name="area" 
            className="form-select"
            value={formData.area}
            onChange={handleChange}
          >
            <option value="">Select Area</option>
            <option value="area1">area1</option>
            <option value="area2">area2</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Select nearest Consumer Service Center</label>
          <select 
            id="csc" 
            name="csc" 
            className="form-select"
            value={formData.csc}
            onChange={handleChange}
          >
            <option value="">Select CSC</option>
            <option value="csc1">csc1</option>
            <option value="csc2">csc2</option>
          </select>
        </div>
      </div>
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label" htmlFor="sadress">Street Address:</label>
          <input 
            type="text" 
            id="sadress" 
            name="sadress" 
            className="form-input"
            value={formData.sadress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="suburb">Suburb:</label>
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
          <label className="form-label" htmlFor="scity">City:</label>
          <input 
            type="text" 
            id="scity" 
            name="scity" 
            className="form-input"
            value={formData.scity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="spostalcode">Postal Code:</label>
          <input 
            type="text" 
            id="spostalcode" 
            name="spostalcode" 
            className="form-input"
            value={formData.spostalcode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label" htmlFor="assestmentNo">Assestment No:</label>
          <input 
            type="text" 
            id="assestmentNo" 
            name="assestmentNo" 
            className="form-input"
            value={formData.assestmentNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="neigbourAcc">Neighbour's Acc Number:</label>
          <input 
            type="text" 
            id="neigbourAcc" 
            name="neigbourAcc" 
            className="form-input"
            value={formData.neigbourAcc}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="ownership">Ownership:</label>&nbsp;&nbsp;
        <div className="radio-group">
          
          <input 
            type="radio" 
            id="Occupy" 
            name="ownership" 
            value="Occupy" 
            className="radio-input"
            checked={formData.ownership === "Occupy"}
            onChange={handleChange}
          /><label htmlFor="Occupy" className="radio-label">Occupy</label>&nbsp;
          &nbsp;
          
          <input 
            type="radio" 
            id="Rent" 
            name="ownership" 
            value="Rent" 
            className="radio-input"
            checked={formData.ownership === "Rent"}
            onChange={handleChange}
          /><label htmlFor="Rent" className="radio-label">Rent</label>
        </div>
      </div>
    </div>
  );
};
export{ServiceLocationDetails};
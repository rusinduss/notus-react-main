import React from "react";

const ConnectionDetails = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="form-box">
      <div className="form-row">
        <label className="form-label" htmlFor="disturbance"><b>Loads Creating Disturbance:</b></label>&nbsp;&nbsp;
        <div className="radio-group">
          
          <input 
            type="radio" 
            id="none" 
            name="disturbance" 
            value="None" 
            className="radio-input"
            checked={formData.disturbance === "None"}
            onChange={handleChange}
          />
          <label htmlFor="none" className="radio-label">None</label>&nbsp;
      
          <input 
            type="radio" 
            id="weldingPlant" 
            name="disturbance" 
            value="WeldingPlant" 
            className="radio-input"
            checked={formData.disturbance === "WeldingPlant"}
            onChange={handleChange}
          />
              <label htmlFor="weldingPlant" className="radio-label">Welding Plant</label>
         
          <input 
            type="radio" 
            id="metalCrusher" 
            name="disturbance" 
            value="MetalCrusher" 
            className="radio-input"
            checked={formData.disturbance === "MetalCrusher"}
            onChange={handleChange}
          />
           <label htmlFor="metalCrusher" className="radio-label">Metal Crusher</label>
         
          <input 
            type="radio" 
            id="sawMill" 
            name="disturbance" 
            value="SawMill" 
            className="radio-input"
            checked={formData.disturbance === "SawMill"}
            onChange={handleChange}
          />
           <label htmlFor="sawMill" className="radio-label">Saw Mill</label>
        </div>
      </div>
      <div className="form-box-inner">
        <label className="form-label" htmlFor="phase"><b>Phase:</b></label>&nbsp;&nbsp;
        <div className="radio-group">
         
          <input 
            type="radio" 
            id="1ph" 
            name="phase" 
            value="1ph" 
            className="radio-input"
            checked={formData.phase === "1ph"}
            onChange={handleChange}
          />
           <label htmlFor="1ph" className="radio-label">1ph</label>&nbsp;
          <input 
            type="radio" 
            id="3ph" 
            name="phase" 
            value="3ph" 
            className="radio-input"
            checked={formData.phase === "3ph"}
            onChange={handleChange}
          /><label htmlFor="3ph" className="radio-label">3ph</label>
        </div>
        
        <label className="form-label" htmlFor="connectionType"><b>Connection Type:</b></label>&nbsp;&nbsp;
        <div className="radio-group">
          
          <input 
            type="radio" 
            id="30" 
            name="connectionType" 
            value="30" 
            className="radio-input"
            checked={formData.connectionType === "30"}
            onChange={handleChange}
          />
          <label htmlFor="30" className="radio-label">30A</label>
         
          <input 
            type="radio" 
            id="60" 
            name="connectionType" 
            value="60" 
            className="radio-input"
            checked={formData.connectionType === "60"}
            onChange={handleChange}
          />
           <label htmlFor="60" className="radio-label">60A</label>
        </div>
      </div> 
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label">Customer Category</label>
          <select 
            id="customerCat" 
            name="customerCat" 
            className="form-select"
            value={formData.customerCat}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Tariff Code</label>
          <select 
            id="tariffCode" 
            name="tariffCode" 
            className="form-select"
            value={formData.tariffCode}
            onChange={handleChange}
          >
            <option value="">Select Code</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Tariff Category Code</label>
          <select 
            id="tariffCategeory" 
            name="tariffCategeory" 
            className="form-select"
            value={formData.tariffCategeory || "DP"}
            onChange={handleChange}
          >
            <option value="DP">DP</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export {  ConnectionDetails };
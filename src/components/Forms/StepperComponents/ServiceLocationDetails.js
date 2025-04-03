import React, { useEffect, useState } from "react";

const ServiceLocationDetails = ({ formData, handleChange }) => {
  const [areas, setAreas] = useState([]);
  const [loadingAreas, setLoadingAreas] = useState(false);
  const [error, setError] = useState(null);
  const [cscs, setCscs] = useState([]);
  const [loadingCscs, setLoadingCscs] = useState(false);

  // Fetch areas on component mount
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        setLoadingAreas(true);
        const response = await fetch("http://localhost:8082/api/cscNo/areas");
        if (!response.ok) {
          throw new Error("Failed to fetch areas");
        }
        const data = await response.json();
        setAreas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingAreas(false);
      }
    };

    fetchAreas();
  }, []);
  useEffect(() => {
    const fetchCscs = async () => {
      if (!formData.area) {
        setCscs([]);
        return;
      }

      try {
        setLoadingCscs(true);
        // Find the selected area to get its deptId
        const selectedArea = areas.find(area => area.deptArea === formData.area);
        if (!selectedArea) return;

        const response = await fetch(
          `http://localhost:8082/api/cscNo/depots?deptId=${selectedArea.deptId}` 
           );
        if (!response.ok) {
          throw new Error("Failed to fetch CSCs");
        }
        const data = await response.json();
        console.log("CSC Data:", data); 
        setCscs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingCscs(false);
      }
    };

    fetchCscs();
  }, [formData.area, areas]);


  return (
    <div className="form-box">
      {error && <div className="error-message">{error}</div>}

      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label required">Select your Area</label>
          <select
            id="area"
            name="area"
            className="form-select"
            value={formData.area}
            onChange={handleChange}
            disabled={loadingAreas}
            required
          >
            <option value="">Select Area</option>
            {areas.map((area) => (
              <option key={area.deptId} value={area.deptArea}>
                {area.deptArea}
              </option>
            ))}
          </select>
          {loadingAreas && <div>Loading areas...</div>}
        </div>
      </div>

      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label required">
            Select nearest Consumer Service Center
          </label>
          <select
            id="csc"
            name="deptId"
            className="form-select"
            value={formData.deptId || ""}
            onChange={handleChange}
            disabled={loadingCscs || !formData.area}
            required
          >
            <option value="">Select CSC</option>
            {cscs.map((csc) => (
              <option key={csc.deptId} value={csc.deptId}>
                {csc.deptFullName}
              </option>
            ))}
          </select>
          {loadingCscs && <div>Loading CSCs...</div>}
        </div>
      </div>

      {/* Address details inputs */}
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label required" htmlFor="shouseNo">
            House/Building No:
          </label>
          <input
            type="text"
            id="serviceSuburb"
            name="serviceSuburb"
            className="form-input"
            value={formData.serviceSuburb}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label required" htmlFor="saddress">
            Street Name:
          </label>
          <input
            type="text"
            id="serviceStreetAddress"
            name="serviceStreetAddress"
            className="form-input"
            value={formData.serviceStreetAddress}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label required" htmlFor="scity">
          City:
        </label>
        <input
          type="text"
          id="serviceCity"
          name="serviceCity"
          className="form-input"
          value={formData.serviceCity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="spostalcode">
          Postal Code:
        </label>
        <input
          type="text"
          id="servicePostalCode"
          name="servicePostalCode"
          className="form-input"
          value={formData.servicePostalCode}
          onChange={handleChange}
        />
      </div>

      {/* Additional optional details */}
      <div className="form-box-inner">
        <div className="form-group">
          <label className="form-label" htmlFor="assestmentNo">
            Assessment No:
          </label>
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
          <label className="form-label" htmlFor="neigbourAcc">
            Neighbour's Acc No:
          </label>
          <input
            type="text"
            id="neigboursAccNo"
            name="neigboursAccNo"
            className="form-input"
            value={formData.neigboursAccNo}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Ownership radio buttons */}
      <div className="form-row">
        <label className="form-label" htmlFor="ownership">
          Ownership:
        </label>
        &nbsp;&nbsp;
        <div className="radio-group">
          <input
            type="radio"
            id="Occupy"
            name="ownership"
            value="Occupy"
            className="radio-input"
            checked={formData.ownership === "Occupy"}
            onChange={handleChange}
          />
          <label htmlFor="Occupy" className="radio-label">
            Occupy
          </label>
          &nbsp;
          <input
            type="radio"
            id="Rent"
            name="ownership"
            value="Rent"
            className="radio-input"
            checked={formData.ownership === "Rent"}
            onChange={handleChange}
          />
          <label htmlFor="Rent" className="radio-label">
            Rent
          </label>
        </div>
      </div>
    </div>
  );
};

export { ServiceLocationDetails };
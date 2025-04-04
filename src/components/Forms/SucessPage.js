import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const { applicationId, customerName } = location.state || {};

  return (
    <div className="success-container">
      <h1>Application Submitted Successfully!</h1>
      <p>Thank you, {customerName || 'customer'}, for your application.</p>
      {/* {applicationId && <p>Your application ID: {applicationId}</p>} */}
    </div>
  );
};

export default SuccessPage;
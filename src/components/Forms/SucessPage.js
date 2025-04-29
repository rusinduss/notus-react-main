import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // For navigation button
import './SuccessPage.css'; // Import the CSS file

const SuccessPage = () => {
  const location = useLocation();
  const { customerName } = location.state || {};

  return (
    <div className="success-container">
      <h1>Application Submitted Successfully!</h1>
      <p>Thank you, <span>{customerName || 'customer'}</span>, for your application.</p>
      {/* Add a button to go back or proceed */}
      <Link to="/landing">Go to Landing Page</Link>
    </div>
  );
};

export default SuccessPage;

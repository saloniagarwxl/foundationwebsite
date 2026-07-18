import "./ViewModal.css";
import logo from "../assets/logo.png";

function ViewModal({ open, beneficiary, onClose }) {
  if (!open || !beneficiary) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="view-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <img src={logo} alt="Women For Girls NGO" className="view-logo" />

        <h1>Women For Girls NGO</h1>

        <p className="view-subtitle">
          Beneficiary Profile
        </p>

        <div className="profile-grid">

          <div className="profile-item">
            <span>Name</span>
            <p>{beneficiary.name}</p>
          </div>

          <div className="profile-item">
            <span>Mentor</span>
            <p>{beneficiary.mentor}</p>
          </div>

          <div className="profile-item">
            <span>Email</span>
            <p>{beneficiary.email}</p>
          </div>

          <div className="profile-item">
            <span>Mobile</span>
            <p>{beneficiary.mobile}</p>
          </div>

          <div className="profile-item">
            <span>Age</span>
            <p>{beneficiary.age}</p>
          </div>

          <div className="profile-item">
            <span>Education</span>
            <p>{beneficiary.education}</p>
          </div>

          <div className="profile-item full-width">
            <span>Address</span>
            <p>{beneficiary.address}</p>
          </div>

          <div className="profile-item full-width">
            <span>Help Provided</span>
            <p>{beneficiary.help}</p>
          </div>

          <div className="profile-item full-width">
            <span>Status</span>
            <p>{beneficiary.status}</p>
          </div>

        </div>

        <button
          className="close-btn"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default ViewModal;
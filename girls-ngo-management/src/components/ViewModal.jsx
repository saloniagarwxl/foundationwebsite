function ViewModal({ open, beneficiary, onClose }) {
  if (!open || !beneficiary) return null;

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>Beneficiary Profile</h2>

        <p><strong>Name:</strong> {beneficiary.name}</p>
        <p><strong>Mentor:</strong> {beneficiary.mentor}</p>
        <p><strong>Email:</strong> {beneficiary.email}</p>
        <p><strong>Age:</strong> {beneficiary.age}</p>
        <p><strong>Address:</strong> {beneficiary.address}</p>
        <p><strong>Mobile:</strong> {beneficiary.mobile}</p>
        <p><strong>Education:</strong> {beneficiary.education}</p>
        <p><strong>Help Provided:</strong> {beneficiary.help}</p>
        <p><strong>Status:</strong> {beneficiary.status}</p>

        <div className="modal-buttons">
          <button className="cancel" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewModal;
function BeneficiaryCard({ beneficiary, onView, onEdit }) {
  return (
    <div className="card">

      <h3>{beneficiary.name}</h3>

      <p>
        <strong>Mentor:</strong> {beneficiary.mentor}
      </p>

      <p>
        <strong>Mobile:</strong> {beneficiary.mobile}
      </p>

      <p>
        <strong>Education:</strong> {beneficiary.education}
      </p>

      <span className="status">
        {beneficiary.status}
      </span>

      <div className="buttons">

        <button
          className="view"
          onClick={onView}
        >
          View Profile
        </button>

        <button
          className="edit"
          onClick={onEdit}
        >
          Edit
        </button>

      </div>

    </div>
  );
}

export default BeneficiaryCard;
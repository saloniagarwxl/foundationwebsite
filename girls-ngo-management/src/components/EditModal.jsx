import { useState, useEffect } from "react";

function EditModal({
  open,
  beneficiary,
  beneficiaries,
  setBeneficiaries,
  onClose,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (beneficiary) {
      setFormData(beneficiary);
    }
  }, [beneficiary]);

  if (!open || !beneficiary) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    const updated = beneficiaries.map((b) =>
      b.id === formData.id ? formData : b
    );

    setBeneficiaries(updated);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>Edit Beneficiary</h2>

        <input
          name="name"
          placeholder="Name"
          value={formData.name || ""}
          onChange={handleChange}
        />

        <input
          name="mentor"
          placeholder="Mentor Name"
          value={formData.mentor || ""}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={handleChange}
        />

        <input
          name="age"
          placeholder="Age"
          value={formData.age || ""}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={formData.address || ""}
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile || ""}
          onChange={handleChange}
        />

        <input
          name="education"
          placeholder="Education"
          value={formData.education || ""}
          onChange={handleChange}
        />

        <input
          name="help"
          placeholder="Help Provided"
          value={formData.help || ""}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status || "Active"}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>

        <div className="modal-buttons">
          <button className="save" onClick={saveChanges}>
            Save
          </button>

          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditModal;
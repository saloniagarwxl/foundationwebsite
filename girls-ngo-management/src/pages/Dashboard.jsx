import { useState } from "react";
import beneficiariesData from "../data/beneficiaries";
import SearchBar from "../components/SearchBar";
import BeneficiaryCard from "../components/BeneficiaryCard";
import ViewModal from "../components/ViewModal";
import EditModal from "../components/EditModal";
import "../App.css";

function Dashboard() {
  const [beneficiaries, setBeneficiaries] = useState(beneficiariesData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const filteredBeneficiaries = beneficiaries.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <h1>Girls NGO Beneficiary Management</h1>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="card-container">
        {filteredBeneficiaries.map((beneficiary) => (
          <BeneficiaryCard
            key={beneficiary.id}
            beneficiary={beneficiary}
            onView={() => {
              setSelected(beneficiary);
              setViewOpen(true);
            }}
            onEdit={() => {
              setSelected(beneficiary);
              setEditOpen(true);
            }}
          />
        ))}
      </div>

      <ViewModal
        open={viewOpen}
        beneficiary={selected}
        onClose={() => setViewOpen(false)}
      />

      <EditModal
        open={editOpen}
        beneficiary={selected}
        beneficiaries={beneficiaries}
        setBeneficiaries={setBeneficiaries}
        onClose={() => setEditOpen(false)}
      />
    </>
  );
}

export default Dashboard;
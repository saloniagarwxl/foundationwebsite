
import React, { useState } from "react";
import "./OurMentors.css";
import homelogo from "../assets/ic_inbox.svg";
import edulogo from "../assets/ic_Sent.svg";
import notiflogo from "../assets/ic_Notification.svg";


// Dummy data for now. Later this can come from a database or backend API.
const mentorsData = [
    {
        id: 1,
        name: "Ms Anushka Bose",
        mobile: "7890654689",
        email: "anushka@example.com",
        beneficiaryCount: 72,
        status: "Active",
    },
    {
        id: 2,
        name: "Dr. Makise Kurisu",
        mobile: "7890654689",
        email: "kurisu@example.com",
        beneficiaryCount: 58,
        status: "Active",
    },
    {
        id: 3,
        name: "Lucy Heartfillia",
        mobile: "7890654689",
        email: "lucy@example.com",
        beneficiaryCount: 35,
        status: "Inactive",
    },
    {
        id: 4,
        name: "Penelope Eckhart",
        mobile: "7890654689",
        email: "penelope@example.com",
        beneficiaryCount: 100,
        status: "Inactive",
    },
    {
        id: 5,
        name: "Wu Zetian",
        mobile: "7890654689",
        email: "-",
        beneficiaryCount: 20,
        status: "Active",
    },
];

function MentorsTable() {
    const [searchText, setSearchText] = useState("");

    // Search logic: show only mentors whose name includes the typed text.
    const filteredMentors = mentorsData.filter((mentor) => {
        return mentor.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <main className="mentor-dashboard">
            <section className="sidebar">
                <div className="logo-circle">W</div>
                <button className="sidebar-button" type="button">
                    <img src={homelogo} alt="Home" className="sidebar-icon" />
                </button>
                <button className="sidebar-button" type="button">
                    <img src={edulogo} alt="edu" className="sidebar-icon" />
                </button>

            </section>

            <section className="dashboard-main">
                <header className="topbar">

                    <button className="notification-button" type="button">
                        <img src={notiflogo} className="notification-button" alt="Noitification" />

                    </button>
                    <button className="admin-button" type="button">
                        <span className="admin-icon">A</span>
                        <span>Admin</span>
                    </button>
                </header>

                <section className="content-area">
                    <div className="page-header">
                        <h1>Our Mentors</h1>
                    </div>

                    <div className="toolbar">
                        <input
                            type="text"
                            placeholder="Search Mentors"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />

                        <div className="toolbar-actions">
                            <button className="filter-button" type="button">Filter</button>
                            <button className="add-button" type="button">+ Add Mentor</button>
                        </div>
                    </div>

                    <section className="table-card">
                        <div className="table-header table-row">
                            <span>Name</span>
                            <span>Mobile Number</span>
                            <span>E-mail</span>
                            <span>Beneficiary count</span>
                            <span>Status</span>
                        </div>

                        {filteredMentors.map((mentor) => (
                            <div className="table-row" key={mentor.id}>
                                <strong>{mentor.name}</strong>
                                <span>{mentor.mobile}</span>
                                <span>{mentor.email}</span>

                                <div className="progress-area">
                                    <div className="progress-track">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${mentor.beneficiaryCount}%` }}
                                        ></div>
                                    </div>
                                    <span>{mentor.beneficiaryCount}%</span>
                                </div>

                                <span
                                    className={
                                        mentor.status === "Active"
                                            ? "status-badge active-status"
                                            : "status-badge inactive-status"
                                    }
                                >
                                    {mentor.status}
                                </span>
                            </div>
                        ))}

                        {filteredMentors.length === 0 && (
                            <div className="empty-message">No mentors found</div>
                        )}
                    </section>
                </section>
            </section>
        </main>
    );
}

export default MentorsTable;
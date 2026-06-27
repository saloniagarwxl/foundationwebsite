import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mentorlist.css";

// Dummy data for now. Later, this can come from a database or API.
const mentorsdata = [
    {
        id: 1,
        fullName: "Ms Anushka Bose",
        ad: "West Bengal",
        country: "India",
    },
    {
        id: 2,
        fullName: "Dr. Makise Kurisu",
        ad: "Kyoto",
        country: "Japan",
    },
    {
        id: 3,
        fullName: "Lucy Heartfillia",
        ad: "Rio de Janeiro",
        country: "Brazil",
    },
    {
        id: 4,
        fullName: "Penelope Eckhart",
        ad: "Queensland",
        country: "Australia",
    },
    {
        id: 5,
        fullName: "Wu Zetian",
        ad: "Shandong",
        country: "China",
    },
    {
        id: 6,
        fullName: "Hinata Hyuga",
        ad: "Konoha",
        country: "Japan",
    },
];

function MentorsList() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    // Searching for mentors by name
    const filteredMentors = mentorsdata.filter((mentor) => {
        return mentor.fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <main className="mentors-page">
            <header className="admin-topbar">
                <button className="notification-button" type="button">
                    notification
                </button>

                <button className="admin-account-button" type="button">
                    <span className="admin-avatar">A</span>
                    <span>Admin</span>
                    <span className="admin-arrow">▼</span>
                </button>
            </header>


            <section className="mentors-container">
                <header className="mentors-header">
                    <div>
                        <h1>Our Mentors</h1>
                        <p>Mentors in Women for Girls Foundation</p>
                    </div>

                    <button className="add-mentor-button" type="button">
                        Add New Mentor
                    </button>
                </header>

                <section className="mentor-toolbar">
                    <div className="search-field">
                        <label htmlFor="mentor-search">Search by name</label>
                        <input
                            id="mentor-search"
                            type="text"
                            placeholder="Search mentors..."
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                    </div>
                </section>

                {/* Showing all mentors after search */}
                <section className="mentors-grid">
                    {filteredMentors.map((mentor) => (
                        <article className="mentor-card" key={mentor.id}>
                            <div className="mentor-avatar"></div>

                            <h2>{mentor.fullName}</h2>

                            <p className="mentor-location">
                                {mentor.ad}, {mentor.country}
                            </p>

                            <button
                                className="action-button view-button"
                                type="button"
                                onClick={() => navigate("/mentor-profile")}
                            >
                                View Profile
                            </button>
                        </article>
                    ))}

                    {filteredMentors.length === 0 && (
                        <div className="empty-state">
                            <h2>No mentors found</h2>
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}

export default MentorsList;

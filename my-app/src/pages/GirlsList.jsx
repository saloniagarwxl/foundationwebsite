import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Filter, Plus, User, ChevronDown } from "lucide-react";
import "./GirlsList.css";

// Dummy data for now. Later, this can come from a database or API.
const girlsData = [
    {
        id: 1,
        fullName: "Parnavi Sharma",
        state: "Rajasthan",
        country: "India",
    },
    {
        id: 2,
        fullName: "Amber Glen",
        state: "Texas",
        country: "United States",
    },
    {
        id: 3,
        fullName: "Nobara Kugisaki",
        state: "Osaka",
        country: "Japan",
    },
    {
        id: 4,
        fullName: "Mikasa Yeager",
        state: "Shiganshina",
        country: "Germany",
    },
    {
        id: 5,
        fullName: "Mei ling",
        state: "Kedah",
        country: "Malaysia",
    },
    {
        id: 6,
        fullName: "Tsheten Ongmu Bhutia",
        state: "Sikkim",
        country: "India",
    },
];

function GirlsList() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    //Searching for Girls in the list by name
    const filteredGirls = girlsData.filter((girl) => {
        return girl.fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <main className="girls-list-page">


            {/* ===== Hero Banner ===== */}
            <section className="girls-hero">

                <img
                    src="/header.png"
                    alt="Header"
                    className="girls-hero-image"
                />

                <div className="girls-hero-overlay"></div>

                {/* Admin */}
                <button className="girls-admin-button" type="button">
                    <span className="girls-admin-icon">
                        <User size={16} strokeWidth={2} />
                    </span>
                    <span>Admin</span>
                    <ChevronDown size={16} strokeWidth={2} />
                </button>

                {/* Stats */}
                <div className="girls-stats">

                    <div className="girls-stat-item">
                        <strong>250</strong>
                        <span>Number of Beneficiaries</span>
                    </div>

                    <div className="girls-stat-item">
                        <strong>50</strong>
                        <span>Mentors</span>
                    </div>

                </div>

                {/* Quote */}
                <div className="hero-quote-card">
                    <p className="hero-quote">
                        "The way to achieve your own success is to be
                        willing to help somebody else get it first."
                    </p>

                    <span className="hero-author">
                        - Iyanla Vanzant
                    </span>
                </div>

            </section>

            {/* ===== Main Content ===== */}
            <section className="girls-list-container">

                <header className="girls-list-header">
                    <div>
                        <h1>Our Beneficiaries</h1>
                    </div>
                </header>

                <section className="girls-toolbar">
                    <div className="search-field">
                        <Search className="search-icon" />
                        <input
                            id="girl-search"
                            type="text"
                            placeholder="Search Student"
                            value={searchText}
                            onChange={(event) =>
                                setSearchText(event.target.value)
                            }
                        />
                    </div>

                    <div className="girls-toolbar-actions">
                        <button className="girls-filter-button" type="button">
                            <Filter className="filter-icon" />
                        </button>

                        <button className="add-girl-button" type="button">
                            <Plus className="add-icon" />
                            Add beneficiary
                        </button>
                    </div>
                </section>

                <section className="girls-grid">
                    {filteredGirls.map((girl) => (
                        <article className="girl-card" key={girl.id}>
                            <div className="girl-card-main">
                                <div className="girl-avatar"></div>

                                <div className="girl-summary">
                                    <button
                                        className="girl-name-button"
                                        type="button"
                                        onClick={() =>
                                            navigate("/girl-profile")
                                        }
                                    >
                                        {girl.fullName}
                                    </button>
                                </div>
                            </div>

                            <div className="girl-info-grid">
                                <span className="info-label girl-location">
                                    <MapPin
                                        className="location-icon"
                                        size={13}
                                        strokeWidth={2}
                                    />
                                    <span>
                                        {girl.state}/{girl.country}
                                    </span>
                                </span>
                            </div>
                        </article>
                    ))}

                    {filteredGirls.length === 0 && (
                        <div className="empty-state">
                            <h2>No girls found</h2>
                        </div>
                    )}
                </section>

            </section>
        </main>
    );
}

export default GirlsList;

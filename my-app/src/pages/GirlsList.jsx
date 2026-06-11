import React, { useState } from "react";
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

    //Searching for Girls in the list by name
    const filteredGirls = girlsData.filter((girl) => {
        return girl.fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <main className="girls-list-page">
            <section className="girls-list-container">
                <header className="girls-list-header">
                    <div>
                        <h1>Girls List</h1>
                        <p>Manage and monitor all registered girls.</p>
                    </div>

                    <button className="add-girl-button" type="button">
                        Add New Girl
                    </button>
                </header>

                <section className="girls-toolbar">
                    <div className="search-field">
                        <label htmlFor="girl-search">Search by name</label>
                        <input
                            id="girl-search"
                            type="text"
                            placeholder="Search girls..."
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                    </div>
                </section>

                {/* Showing all girls after search */}
                <section className="girls-grid">
                    {filteredGirls.map((girl) => (
                        <article className="girl-card" key={girl.id}>
                            <div className="girl-card-main">
                                <div className="girl-avatar"></div>

                                <div className="girl-summary">
                                    <h2>{girl.fullName}</h2>
                                </div>
                            </div>

                            <div className="girl-info-grid">
                                <div>
                                    <span className="info-label"><strong>{girl.state}, {girl.country}</strong></span>



                                </div>
                            </div>

                            <div>
                                <button className="action-button view-button" type="button">
                                    View Profile
                                </button>
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
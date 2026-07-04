import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import GirlProfile from "./pages/GirlProfile";
import GirlsList from "./pages/GirlsList";
import MentorsList from "./pages/MentorsList";
import MentorsProfile from "./pages/MentorsProfile";
import MentorsTable from "./pages/OurMentors";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <aside className="app-sidebar">
          <div className="app-logo">W</div>

          <nav className="app-nav">
            <NavLink to="/" className="app-nav-button">
              Mentors List
            </NavLink>
            <NavLink to="/mentor-profile" className="app-nav-button">
              Mentor Profile
            </NavLink>
            <NavLink to="/girls" className="app-nav-button">
              Girls List
            </NavLink>
            <NavLink to="/girl-profile" className="app-nav-button">
              Girl Profile
            </NavLink>
            <NavLink to="/ourmentors" className="app-nav-button">
              Our Mentors
            </NavLink>
          </nav>
        </aside>

        <main className="app-page-content">
          <Routes>
            <Route path="/" element={<MentorsList />} />
            <Route path="/mentor-profile" element={<MentorsProfile />} />
            <Route path="/girls" element={<GirlsList />} />
            <Route path="/girl-profile" element={<GirlProfile />} />
            <Route path="/ourmentors" element={<MentorsTable />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

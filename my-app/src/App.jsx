import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {
  Heart,
  Users,
  BarChart3,
  CircleHelp,
} from "lucide-react";
import "./App.css";

import GirlProfile from "./pages/GirlProfile";
import GirlsList from "./pages/GirlsList";
import MentorsList from "./pages/MentorsList";
import MentorsProfile from "./pages/MentorsProfile";
import MentorsTable from "./pages/OurMentors";
import wfgLogo from "./assets/imagewfg.png";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <aside className="app-sidebar">
          <img
            className="app-logo"
            src={wfgLogo}
            alt="Women for Girls Foundation logo"
          />

          <nav className="app-nav">

            {/* Girls List */}
            <NavLink to="/girls" className="app-nav-button">
              <Heart size={24} strokeWidth={2} />
            </NavLink>

            {/* Our Mentors */}
            <NavLink to="/ourmentors" className="app-nav-button">
              <Users size={24} strokeWidth={2} />
            </NavLink>

            {/* Dummy Button */}
            <button className="app-nav-button dummy-button">
              <BarChart3 size={24} strokeWidth={2} />
            </button>

            {/* Girl Profile */}
            <NavLink to="/girl-profile" className="app-nav-button">
              <CircleHelp size={24} strokeWidth={2} />
            </NavLink>

          </nav>

          {/* Mentor Profile text at the bottom */}
          <div className="mentor-profile-link">
            <NavLink to="/mentor-profile">
              Mentor Profile
            </NavLink>
          </div>

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
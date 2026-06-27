import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import GirlProfile from "./pages/GirlProfile";
import GirlsList from "./pages/GirlsList";
import MentorsList from "./pages/MentorsList";
import MentorsProfile from "./pages/MentorsProfile";
import MentorsTable from "./pages/OurMentors";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", display: "flex", gap: "15px" }}>
        <Link to="/">Mentors List</Link>
        <Link to="/mentor-profile">Mentor Profile</Link>
        <Link to="/girls">Girls List</Link>
        <Link to="/girl-profile">Girl Profile</Link>
        <Link to="/ourmentors">Our Mentors</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MentorsList />} />
        <Route path="/mentor-profile" element={<MentorsProfile />} />
        <Route path="/girls" element={<GirlsList />} />
        <Route path="/girl-profile" element={<GirlProfile />} />
        <Route path="/ourmentors" element={<MentorsTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

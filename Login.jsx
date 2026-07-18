import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="logo-wrapper">
          <img src={logo} alt="Women For Girls" className="logo" />
        </div>

        {/* Title */}
        <h1>Welcome to Women For Girls</h1>

        <p className="subtitle">
          Sign in to access the care platform
        </p>

        {/* Email */}
        <div className="input-group">
          <label>Username</label>
          <input
            type="email"
            placeholder="you@mentorhub.app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button className="signin-btn" onClick={handleLogin}>
          Sign in
        </button>

      </div>
    </div>
  );
}

export default Login;
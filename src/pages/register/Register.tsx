import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/AuthService";
import { toast } from "sonner";
import "./Register.css";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      toast.error("Password dosent matches !");
      return;
    }

    const token = await register(email, password);
    switch(token) {
      case "Email already exist !": {
        toast.error("Email already exist !");
        break;
      }
      case "Internal servor error !": {
        toast.error("Sorry, internal server error !");
        break;
      }
      default: {
        toast.success("Registered successfully !");
        navigate("/accounts");
        break;
      }
    }
  };

  return (
    <div className="Register">
      <div className="hero-banner-register">
        <div className="hero-banner-top-register">
          <img src="./assets/netstream-logo.png" alt="Logo" onClick={() => navigate("/")} />
        </div>
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address !" required />
              <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character !" required />
              <input type="password" id="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character !" required />
            </div>
            <p className="terms">You agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
          <p className="redirect-text">Already have an account ? <span onClick={() => navigate("/login")} className="redirect-link">Log in here !</span></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

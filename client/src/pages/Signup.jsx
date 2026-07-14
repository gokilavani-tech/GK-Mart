import "../styles/Signup.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", user);

      toast.success("Registration Successful 🎉");

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <div className="signup-page">

      <div className="signup-card">

        <h1>Create Account 🚀</h1>

        <p className="signup-subtitle">
          Join GK Mart and start shopping today
        </p>

        <form
          className="signup-form"
          onSubmit={handleSignup}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="signup-btn"
          >
            Create Account
          </button>

        </form>

        <p className="login-text">

          Already have an account?

          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Signup;
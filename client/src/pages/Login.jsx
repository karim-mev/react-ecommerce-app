import React, { useState } from "react";
import { loginUser } from "../axios/auth";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await loginUser(email, password);
      navigate("/");
      console.log(userData);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // handle server error
        throw new Error(error.response.data.error);
      } else if (error.request) {
        // handle network error
        throw new Error("Network error");
      } else {
        // handle other errors
        throw new Error("Something went wrong");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="fields">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="fields">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

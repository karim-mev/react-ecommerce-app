import React, { useState } from "react";
import registerUser from "../axios/auth";
import "../css/register.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await registerUser(name, email, password);
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [credentaials, setCredentaials] = useState({ email: "", password: "" });
  const host = "https://cloudnotebook-3fpi.onrender.com";
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentaials.email,
        password: credentaials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in successfully", "success");
      history("/addnote");
    } else {
      props.showAlert("invail email and password", "danger");
    }
  };
  const onChange = (e) => {
    setCredentaials({ ...credentaials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="text-center my-3">Login</h1>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{
          minHeight: "80vh",
        }}
      >
        <form
          className="p-5"
          style={{
            width: "50%",
            boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
            borderRadius: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={credentaials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={credentaials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

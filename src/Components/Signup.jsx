import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentaials, setCredentaials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const host = "https://cloudnotebook-3fpi.onrender.com";
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentaials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history("/addnote");
      props.showAlert("account created successfully", "success");
    } else {
      props.showAlert("invail email and password", "danger");
    }
  };

  const onChange = (e) => {
    setCredentaials({ ...credentaials, [e.target.name]: e.target.value });
  };
  return (
    <>
    <h1 className="text-center my-3">Sign Up</h1>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{
          minHeight: "90vh",
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              onChange={onChange}
            />
          </div>
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
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="cpassword"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;

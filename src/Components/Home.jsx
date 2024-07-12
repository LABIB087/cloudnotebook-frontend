import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      className="d-flex justify-content-center align-content-center flex-column text-center text-black"
      style={{ height: "80vh" }}
    >
      <h1>Cloud Note Book</h1>
      <p style={{ width: "70%", margin: "0px auto" }}>
        Your notes on the cloud. Create Update and Delete your notes anytime
        anywhere.And its totally free
      </p>
      <div className="homebtn">
        {!localStorage.getItem("token") ? (
          <Link to="/login" className="btn btn-primary my-3">
            Get Started
          </Link>
        ) : (
          <Link to="/addnote" className="btn btn-primary my-3">
            Add Note
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;

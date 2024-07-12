import React  from "react";
// import { useContext } from "react";
// import noteContext from "../context/notes/noteContext";
function About() {
  // const a = useContext(noteContext)
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-content-center text-black text-center" style={{height: '80vh'}}>
        <h1 className="">About Cloud Note Book</h1>
        <p style={{width: '70%', margin: '0px auto'}}>
          Cloud Note Book is a cloud base note book where you can store your
          notes in online where no one will be abol to access your notes except
          yourself.This very website was created by using MERN stack and the
          website was developed by <a target="_blank" href=" https://github.com/LABIB087/">Labib Ahammed</a>.
        </p>
      </div>
    </>
  );
}

export default About;

import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoteState from "./context/notes/NoteState";
import Addnote from "./Components/Addnote";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert"
import AllNotes from "./Components/AllNotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/addnote" element={<Addnote showAlert={showAlert}/>} />
            <Route path="/allnote" element={<AllNotes showAlert={showAlert}/>} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

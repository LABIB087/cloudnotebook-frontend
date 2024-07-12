import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

function Addnote(props) {
  const context = useContext(noteContext);
  const history = useNavigate();

  const { addNote, getNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
  },);


  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success")
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="text-black">
        <div className="container">
          <h1 className="text-center py-3">Add A New Note</h1>
          <div className="container" style={{ maxWidth: "50%" }}>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Enter your title here"
                  className="form-control"
                  style={{ border: "1px solid black" }}
                  onChange={onChange}
                  name="title"
                  id="title"
                  minLength={5}
                  required
                  value={note.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Enter your description here"
                  rows="8"
                  style={{ border: "1px solid black" }}
                  onChange={onChange}
                  minLength={5}
                  required
                  value={note.description}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="tag">Tag(optional)</label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  placeholder="Enter your tag here"
                  className="form-control"
                  style={{ border: "1px solid black" }}
                  onChange={onChange}
                  value={note.tag}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ margin: "10px auto", width: "100%" }}
                onClick={handleAddNote}
                disabled={note.title.length<5 || note.description.length<5}
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addnote;

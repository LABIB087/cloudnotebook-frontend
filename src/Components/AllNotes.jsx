import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";
function AllNotes(props) {
  const { showAlert } = props;
  const history = useNavigate();
  //eslint-disable-next-line no-unused-vars
  const context = useContext(noteContext);

  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
  },);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleAddNote = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note updated successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <button
        type="button"
        className="d-none btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="etitle">Title</label>
                  <input
                    value={note.etitle}
                    type="text"
                    placeholder="Enter your title here"
                    className="form-control"
                    style={{ border: "1px solid black" }}
                    onChange={onChange}
                    name="etitle"
                    id="etitle"
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="edescription">Description</label>
                  <textarea
                    value={note.edescription}
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    placeholder="Enter your description here"
                    rows="8"
                    style={{ border: "1px solid black" }}
                    onChange={onChange}
                    minLength={5}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag(optional)</label>
                  <input
                    value={note.etag}
                    type="text"
                    id="etag"
                    name="etag"
                    placeholder="Enter your tag here"
                    className="form-control"
                    style={{ border: "1px solid black" }}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleAddNote}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-3 text-center">Your Notes</h2>
      <div className="row justify-content-center">
        {notes.length === 0 && "No Notes to Display"}
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              note={note}
              showAlert={showAlert}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllNotes;

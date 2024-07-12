import React, { useContext} from "react";
import noteContext from "../context/notes/noteContext";


function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div>
      <div
        className="card mx-2 my-3"
        style={{
          width: "18rem",
          height: "15rem",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        <button
          type="button"
          className="btn btn-danger position-relative"
          style={{
            borderRadius: "1000px",
            maxWidth: "70%",
            margin: "1px auto",
          }}
        >
          <span className="visually-hidden">
            {note.tag.length <= 0 ? (note.tag = "default") : note.tag}
          </span>
        </button>
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title m-0" style={{ fontSize: "16px" }}>
              {note.title.length >= 18
                ? note.title.slice(0, 18) + "..."
                : note.title}
            </h5>
            <div>
              <i
                className="fa-regular fa-pen-to-square mx-2"
                onClick={() => {
                  updateNote(note);
                }}
                style={{ fontSize: "18px" }}
              ></i>
              <i
                className="fa-solid fa-trash-can mx-2"
                style={{ fontSize: "18px" }}
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note deleted successfully", "success");
                }}
              ></i>
            </div>
          </div>
          <hr style={{ border: "1px solid" }} />
          <p className="card-text">
            {note.description.length >= 130
              ? note.description.slice(0, 130) + " ..."
              : note.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;

import React, { useState, useEffect } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { ListGroup, Spinner, Container, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [props.isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function renderNotesList(notes) {
    return [{}]
      .concat(notes)
      .sort((a, b) => b.createdAt - a.createdAt)
      .map((note, i) =>
        i !== 0 ? (
          <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
            <ListGroup.Item action>
              <h5>{note.content.trim().split("\n")[0]}</h5>
              {"Created: " + new Date(note.createdAt).toLocaleString()}
              {note.attachment && (
                <Badge className="float-right" variant="secondary" pill>
                  Attachment
                </Badge>
              )}
            </ListGroup.Item>
          </LinkContainer>
        ) : (
          <LinkContainer key="new" to="/notes/new">
            <ListGroup.Item action>
              <h5>
                <b>{"\uFF0B"}</b> Create a new note
              </h5>
            </ListGroup.Item>
          </LinkContainer>
        )
      );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
        <div>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
        </div>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h1>Notes</h1>
        <ListGroup>
          {!isLoading ? (
            renderNotesList(notes)
          ) : (
            <Container className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </Container>
          )}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}

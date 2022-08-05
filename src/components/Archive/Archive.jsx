import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Archive() {


  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector(store => store.note.notesReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_NOTES' });
}, []);

const handleGoNewNote = () => {
  history.push('/newwhiskeynote')
};

const handleGoDashboard = () => {
  history.push('/dashboard')
};

const handleEditNote = () => {

};

const handleDeleteNote = (note) => {
  console.log("start of handleDeleteNote");
  console.log('this is note.id', note.id);
  dispatch({
    type: 'REMOVE_NOTE',
    payload: note.id
  });
  dispatch({ type: "FETCH_NOTES" });
};


  return (
    <div className="container">
      <div className="question-card">
      <h1>Whiskey Notes</h1>
      <button onClick={handleGoNewNote}>Enter a new note</button>
      <table>
        <thead>
          <tr>
            <th>Review Date</th>
            <th>Whiskey Name</th>
            <th>ABV</th>
            <th>Style</th>
            <th>Origin</th>
            <th>Why?</th>
            <th>Aroma</th>
            <th>Notes</th>
            <th>Flavor</th>
            <th>Notes</th>
            <th>Overall Notes</th>
            <th>Would you buy it again?</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, i)=>(
            <tr key={i}>
            <td>{note.date}</td>
            <td>{note.whiskey_name}</td>
            <td>{note.whiskey_abv}</td>
            <td>{note.whiskey_style}</td>
            <td>{note.whiskey_country}</td>
            <td>{note.why_this_whiskey}</td>
            <td>{note.aroma_rating}</td>
            <td>{note.aroma_notes}</td>
            <td>{note.flavor_rating}</td>
            <td>{note.flavor_notes}</td>
            <td>{note.overall_notes}</td>
            <td>{note.buy_again}</td>
            <td>{note.overall_rating}</td>
            <td><button onClick={handleEditNote}>Edit</button></td>
            <td><button onClick={(event) => handleDeleteNote(note)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleGoDashboard}>Back to dashboard</button>
      {/* <LogOutButton className="btn" /> */}
      </div>
    </div>
  );
}

export default Archive;

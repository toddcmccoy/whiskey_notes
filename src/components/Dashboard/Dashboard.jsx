import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';


function Dashboard(props) {


  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector(store => store.note.notesReducer);
  // const [note, setNote] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_NOTES' });
}, []);

const handleGoNewNote = () => {
  history.push('/newwhiskeynote')
};

const handleGoArchive = () => {
  history.push('/archive')
};

const handleEditNote = () => {
  dispatch ({ type: 'SET_EDIT_NOTE', payload: props.note });
  history.push('/editnote')
};

const handleDeleteNote = (note) => {
  console.log("start of handleDeleteNote");
  // setNote(note.id);
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
            <th>Overall Rating</th>
            <th>Would you buy it again?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, i)=>(
            <tr key={i}>
            <td>{note.date}</td>
            <td>{note.whiskey_name}</td>
            <td>{note.overall_rating}</td>
            <td>{note.buy_again}</td>
            <td><button onClick={handleEditNote}>Edit</button></td>
            <td><button onClick={(event) => handleDeleteNote(note)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleGoArchive}>View all notes</button>
      <LogOutButton className="btn" />
      </div>
    </div>
  );
}

export default Dashboard;




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Dashboard() {


  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector(store => store.note.notesReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_NOTES' });
}, []);

  return (
    <div className="container">
      <div className="question-card">
      <h1>Whiskey Notes</h1>
      <table>
        <tr>
          <th>Review Date</th>
          <th>Whiskey Name</th>
          <th>Overall Rating</th>
          <th>Would you buy it again?</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tbody>
          {notes.map((note, i)=>(
            <tr key={i}>
            <td>{note.date}</td>
            <td>{note.whiskey_name}</td>
            <td>{note.overall_rating}</td>
            <td>{note.buy_again}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Dashboard;




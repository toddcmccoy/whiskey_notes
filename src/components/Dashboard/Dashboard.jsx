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
      <div>
      <h1>Whiskey Notes</h1>
      <table>
        <tbody>
          {notes.map((note, i)=>(
            <tr key={i}><td>{note.whiskey_name}</td></tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Dashboard;




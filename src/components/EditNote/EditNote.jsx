import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditNote() {

  const dispatch = useDispatch();
  const history = useHistory();
  const editNote = useSelector((store) => store.note.editNoteReducer);

  function handleChange(event, property) {
    dispatch({ 
                type: 'EDIT_ONCHANGE', 
                payload: { property: property, value: event.target.value }
            });

  }

  // Called when the submit button is pressed
  function handleSubmit(event) {
    event.preventDefault();

    // PUT REQUEST to /students/:id
    axios.put(`api/notes/${editNote.id}`, editNote)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_CLEAR' });

            // refresh will happen with useEffect on Home
            history.push('/dashboard'); // back to list
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
    
  };


  return (
    <>
      <h2>Edit Whiskey Note</h2>
      <p>We are editing this note: {editNote.whiskey_name} from: {editNote.date}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event, 'whiskey_abv')}
          placeholder='Whiskey ABV'
          value={editNote.whiskey_abv} //very important
        />
        <input type='submit' value='Update ABV' />
      </form>
    </>
  );
}

export default EditNote;

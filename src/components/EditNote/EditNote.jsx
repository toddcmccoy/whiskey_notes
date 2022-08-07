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
    <div className = "container">
      <div className = "question-card">
      <h1>Edit Whiskey Note</h1> 
      <br /><h2>{editNote.whiskey_name}</h2><br />
      Created on: <h3>{editNote.date}</h3>
      <form onSubmit={handleSubmit}>
      <label for="ABV">ABV</label>
        <input
          id="ABV"
          onChange={(event) => handleChange(event, 'whiskey_abv')}
          placeholder='Whiskey ABV'
          value={editNote.whiskey_abv} //very important
        />
        <label for="Style">Style</label>
        <input
          id="Style"
          onChange={(event) => handleChange(event, 'whiskey_style')}
          placeholder='Whiskey Style'
          value={editNote.whiskey_style} //very important
        /><br />
        <label for="Country">Country</label>
        <input
          id="Country"
          onChange={(event) => handleChange(event, 'whiskey_country')}
          placeholder='Whiskey Country'
          value={editNote.whiskey_country} //very important
        />
        <label for="Why">Why this whiskey?</label>
        <input
          id="Why"
          onChange={(event) => handleChange(event, 'why_this_whiskey')}
          placeholder='Why This Whiskey'
          value={editNote.why_this_whiskey} //very important
        /><br />
        <label for="Aroma Rating">Aroma Rating</label>
        <input
          id="Aroma Rating"
          onChange={(event) => handleChange(event, 'aroma_rating')}
          placeholder='Aroma Rating'
          value={editNote.aroma_rating} //very important
        />
        <label for="Aroma Notes">Aroma Notes</label>
        <input
          id="Aroma Notes"
          onChange={(event) => handleChange(event, 'aroma_notes')}
          placeholder='Aroma Notes'
          value={editNote.aroma_notes} //very important
        /><br />
        <label for="Flavor Rating">Flavor Rating</label>
        <input
          id="Flavor Rating"
          onChange={(event) => handleChange(event, 'flavor_rating')}
          placeholder='Flavor Rating'
          value={editNote.flavor_rating} //very important
        />
        <label for="Flavor Notes">Flavor Notes</label>
        <input
          id="Flavor Notes"
          onChange={(event) => handleChange(event, 'flavor_notes')}
          placeholder='Flavor Notes'
          value={editNote.flavor_notes} //very important
        /><br />
        <label for="Overall Notes">Overall Notes</label>
        <input
          id="Overall Notes"
          onChange={(event) => handleChange(event, 'overall_notes')}
          placeholder='Overall Notes'
          value={editNote.overall_notes} //very important
        />
        <label for="Buy Again">Would you buy this again?</label>
        <input
          id="Buy Again"
          onChange={(event) => handleChange(event, 'buy_again')}
          placeholder='Buy Again'
          value={editNote.buy_again} //very important
        />
        <label for="Overall Rating">Your Overall Rating</label>
        <input
          id="Overall Rating"
          onChange={(event) => handleChange(event, 'overall_rating')}
          placeholder='Overall Rating'
          value={editNote.overall_rating} //very important
        /><br />
        <input type='submit' value='Update Note' />
      </form>
      </div>
    </div>
  );
}

export default EditNote;

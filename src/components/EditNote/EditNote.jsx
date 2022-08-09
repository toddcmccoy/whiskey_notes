import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

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
            swal("Sláinte Mhor!", "Your changes have been saved", "success");
            // refresh will happen with useEffect on Home
            history.push('/dashboard'); // back to list
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
    
  };


  return (
    <div className = "edit-container">
      <div className = "edit-card">
      <h2>Edit Whiskey Note</h2> 
      <br /><h1>{editNote.whiskey_name}</h1><br />
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
                    <select id="Style" 
                    name="whiskeyStyle"
                    value = {editNote.whiskey_style}
                    onChange={(event) => handleChange(event, 'whiskey_style')}
                    >
                    <option value="Blend">Blend</option>
                    <option value="Bourbon">Bourbon</option>
                    <option value="Grain">Grain</option>
                    <option value="Malt">Malt</option>
                    <option value="Rye">Rye</option>
                    <option value="Other">Other</option>
                    </select>
                    <br />

                    <label for="Country">Country</label>
                    <select id="whiskeyCountry" 
                    name="whiskeyCountry"
                    value = {editNote.whiskey_country}
                    onChange={(event) => handleChange(event, 'whiskey_country')}
                    >
                    
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Japan">Japan</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="USA">USA</option>
                    <option value="Wales">Wales</option>
                    <option value="Other">Other</option>
                    </select>

  <label for="Why">Why this whiskey?</label>
  <textarea
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
        <textarea
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
        <textarea
          id="Flavor Notes"
          onChange={(event) => handleChange(event, 'flavor_notes')}
          placeholder='Flavor Notes'
          value={editNote.flavor_notes} //very important
        /><br />
        
        <label for="Overall Notes">Overall Notes</label>
        <textarea
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
        <button type='submit' value='Update Note'>Save Note</button>
      </form>
      </div>
    </div>
  );
}

export default EditNote;

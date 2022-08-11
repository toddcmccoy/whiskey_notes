import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import swal from 'sweetalert';

function NoteReview(){
// setting values stored in our redux store to variables in order to post them to the database
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector(store => store.user.id);
    const reviewDate = useSelector(store => store.note.dateReducer);
    const whiskeyName = useSelector(store => store.note.whiskeyNameReducer);
    const whiskeyAbv = useSelector(store => store.note.whiskeyAbvReducer);
    const whiskeyStyle = useSelector(store => store.note.whiskeyStyleReducer);
    const whiskeyCountry = useSelector(store => store.note.whiskeyCountryReducer);
    const whyThisWhiskey = useSelector(store => store.note.whyThisWhiskeyReducer);
    const aromaRating = useSelector(store => store.note.aromaRatingReducer);
    const aromaNotes = useSelector(store => store.note.aromaNotesReducer);
    const flavorRating = useSelector(store => store.note.flavorRatingReducer);
    const flavorNotes = useSelector(store => store.note.flavorNotesReducer);
    const overallNotes = useSelector(store => store.note.overallNotesReducer);
    const buyAgain = useSelector(store => store.note.buyAgainReducer);
    const overallRating = useSelector(store => store.note.overallRatingReducer);

    const handleGoBack = () => {
        history.push('/overallnotes')
    };

// POSTing the feedback data to the database
    const onSubmitFeedback = () => {
        axios({
            method: 'POST',
            url: '/api/notes',
            data: {
                userId: userId,
                date: reviewDate, 
                whiskeyName: whiskeyName,
                whiskeyAbv: whiskeyAbv,
                whiskeyStyle: whiskeyStyle,
                whiskeyCountry: whiskeyCountry, 
                whyThisWhiskey: whyThisWhiskey, 
                aromaRating: aromaRating, 
                aromaNotes: aromaNotes, 
                flavorRating: flavorRating, 
                flavorNotes: flavorNotes,
                overallNotes: overallNotes,
                buyAgain: buyAgain,
                overallRating: overallRating
            }
        })
        .then(() => {
            dispatch({ type: 'FETCH_NOTES' });
        })
        .catch((err) => {
            console.log(`ERR in POST`, err)
        })
        swal("Sláinte Mhaith!", "Your new note has been added", "success");
        history.push('/dashboard')
    }
// displaying the collected feedback on the page before user confirms final submission
return(
    
        <div className = "container">
        
        <div className = "question-card">
        
        <h3>Review your new note</h3>
        <table>
            <thead>
                <tr>
                <th>Field</th>
                <th>Your Response</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Date entered:</td><td> { reviewDate }</td></tr>
                <tr><td>Whiskey Name:</td><td> {whiskeyName}</td></tr>
                <tr><td>ABV: </td><td>{whiskeyAbv}</td></tr>
                <tr><td>Style:</td><td> {whiskeyStyle}</td></tr>
                <tr><td>Country of Origin:</td><td> {whiskeyCountry}</td></tr>
                <tr><td>Why this bottle?: </td><td>{whyThisWhiskey}</td></tr>
                <tr><td>Aroma Rating:</td><td> {aromaRating}</td></tr>
                <tr><td>Aroma Notes:</td><td> {aromaNotes}</td></tr>
                <tr><td>Flavor Rating: </td><td>{flavorRating}</td></tr>
                <tr><td>Flavor Notes: </td><td>{flavorNotes}</td></tr>
                <tr><td>Overall Notes: </td><td>{overallNotes}</td></tr>
                <tr><td>Would you buy this again?: </td><td>{buyAgain}</td></tr>
                <tr><td>Overall Rating of this whiskey: </td><td>{overallRating}</td></tr>
            </tbody>
        </table>
        <br />
                    <button onClick={handleGoBack}>Previous</button>
                    <button className="click" type="submit" onClick={onSubmitFeedback}>Submit</button>
                </div>
            </div>
        
    )
}

export default NoteReview;
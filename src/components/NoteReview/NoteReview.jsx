import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

function NoteReview(){
// setting feedback values stored in our redux store to variables in order to post them to the database
    const history = useHistory();
    const userId = useSelector(store => store.user.id);
    const reviewDate = useSelector(store => store.note.dateReducer);
    const whiskeyName = useSelector(store => store.note.whiskeyNameReducer);
    const whiskeyAbv = useSelector(store => store.note.whiskeyAbvReducer);
    const whiskeyStyle = useSelector(store => store.note.whiskeyStyleReducer);
    const whiskeyCountry = useSelector(store => store.note.whiskeyAbvReducer);
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
            console.log(`In POST `);
        })
        .catch((err) => {
            console.log(`ERR in POST`, err)
        })
        alert('Your whiskey note has been added successfully.')
        history.push('/dashboard')
    }
// displaying the collected feedback on the page before user confirms final submission
return(
    <>
        <div className = "container">
        
        <div className = "question-card">
        <button onClick={handleGoBack}>Previous</button>
        <ul>
            <li><h1>Review your whiskey note</h1></li>
            <li>Date entered: { reviewDate }</li>
            <li>Whiskey Name: {whiskeyName}</li>
            <li>ABV: {whiskeyAbv}</li>
            <li>Style: {whiskeyStyle}</li>
            <li>Country of Origin: {whiskeyCountry}</li>
            <li>Why this bottle?: {whyThisWhiskey}</li>
            <li>Aroma Rating: {aromaRating}</li>
            <li>Aroma Notes: {aromaNotes}</li>
            <li>Flavor Rating: {flavorRating}</li>
            <li>Flavor Notes: {flavorNotes}</li>
            <li>Overall Notes: {overallNotes}</li>
            <li>Would you buy this again?: {buyAgain}</li>
            <li>Overall Rating of this whiskey: {overallRating}</li>
        </ul><br />
        
        <button type="submit" onClick={onSubmitFeedback}>Submit</button>
        </div>
        </div>
        </>
    )
}

export default NoteReview;
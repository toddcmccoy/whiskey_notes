import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

function NoteReview(){
// setting feedback values stored in our redux store to variables in order to post them to the database
    const history = useHistory();
    const reviewDate = useSelector(store => store.dateReducer);
    const whiskeyName = useSelector(store => store.whiskeyNameReducer);
    const whiskeyAbv = useSelector(store => store.whiskeyAbvReducer);
    const whiskeyStyle = useSelector(store => store.whiskeyStyleReducer);
    const whiskeyCountry = useSelector(store => store.whiskeyAbvReducer);
    const whyThisWhiskey = useSelector(store => store.whyThisWhiskeyReducer);
    const aromaRating = useSelector(store => store.aromaRatingReducer);
    const aromaNotes = useSelector(store => store.aromaNotesReducer);
    const flavorRating = useSelector(store => store.flavorRatingReducer);
    const flavorNotes = useSelector(store => store.flavorNotesReducer);
    const overallNotes = useSelector(store => store.overallNotesReducer);
    const buyAgain = useSelector(store => store.buyAgainReducer);
    const overallRating = useSelector(store => store.overallRatingReducer);

    const handleGoBack = () => {
        history.push('/overallnotes')
    };

// POSTing the feedback data to the database
    const onSubmitFeedback = () => {
        axios({
            method: 'POST',
            url: '/:id',
            data: {
                date: reviewDate, 
                whiskey_name: whiskeyName,
                whiskey_abv: whiskeyAbv,
                whiskey_style: whiskeyStyle,
                whiskey_country: whiskeyCountry, 
                why_this_whiskey: whyThisWhiskey, 
                aroma_rating: aromaRating, 
                aroma_notes: aromaNotes, 
                flavor_rating: flavorRating, 
                flavor_notes: flavorNotes,
                overall_notes: overallNotes,
                buy_again: buyAgain,
                overall_rating: overallRating
            }
        })
        .then(() => {
            console.log(`In POST `)
        })
        .catch((err) => {
            console.log(`ERR in POST`, err)
        })
        alert('Your whiskey note has been added successfully.')
        history.push('/')
    }
// displaying the collected feedback on the page before user confirms final submission
    return(
    <>
        <div className = "container">
        
        <div className = "question-card">
        
        <ul>
            <li><h1>Review your whiskey note</h1></li>
            <li>Date entered: {reviewDate}</li>
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
        <button onClick={handleGoBack}>Previous</button>
        <button type="submit" onClick={onSubmitFeedback}>Submit</button>
        </div>
        </div>
        </>
    )
}

export default NoteReview;
import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function OverallNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [overallNotes, setOverallNotes] = useState('');
    const [overallRating, setOverallRating] = useState('');
    const [buyAgain, setBuyAgain] = useState('');

    const handleGoBack = () => {
        history.push('/flavornotes')
    };

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_OVERALL_NOTES',
            payload: overallNotes
        });
        dispatch ({
            type: 'ADD_OVERALL_RATING',
            payload: Number(overallRating)
        });
        dispatch ({
            type: 'ADD_BUY_AGAIN',
            payload: buyAgain
        })
        history.push('/notereview')
    }
    return(
        <div className = "container">
        <div className = "question-card">
        <button onClick={handleGoBack}>Previous</button>
            <h1>Do you have any additional comments you would like to add?</h1>
            <form>
                <input
                type="text"
                className="text-box"
                value = {overallNotes}
                onChange={(event) => setOverallNotes(event.target.value)}
                />
            </form>
                <h2>How would you rate this whiskey overall?</h2>
                <h2>Please select a number between 1 and 10.</h2>
                <h3>1 being 'It effectively cleared the drain when I poured it out.'</h3>
                <h3>10 being 'Whoa dang, this is the most amazing thing I have ever put in my mouth.'</h3>
                <form>
                <input
                className= "number-input"
                type="number"
                min="1"
                max="10"
                value = {overallRating}
                onChange={(event) => setOverallRating(event.target.value)}
                />
                </form><br />
                <form>
                    <p>Would you buy this whiskey again?</p>
                    <input
                    type="text"
                    placeholder="Yes or No"
                    value = {buyAgain}
                    onChange={(event) => setBuyAgain(event.target.value)}
                    />
                </form>
            
            <button onClick={handleSubmit}>Go to Note Review</button>
        </div>
    </div>
    )



}

export default OverallNotes;
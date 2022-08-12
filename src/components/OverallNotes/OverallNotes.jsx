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
        
            <h3 className="rating">Do you have any additional comments you would like to add?</h3>
            <form>
                <textarea
                type="text"
                className="text-box"
                value = {overallNotes}
                onChange={(event) => setOverallNotes(event.target.value)}
                />
            </form>
                <h4 className="rating">How would you rate this whiskey overall?</h4>
                <p className="rating">Please select a number between 1 and 10.</p><br />
                <p>1 being 'It effectively cleared the drain when I poured it out.'<br />
                    10 being 'Whoa dang, this is the most amazing thing I have ever put in my mouth.'</p>
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
                    <label htmlFor="buyAgain">Would you buy this whiskey again?</label>
                    <select id="buyAgain"
                    name="buyAgain"
                    value = {buyAgain}
                    onChange={(event) => setBuyAgain(event.target.value)}>
                    <option value="None">Choose</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </form>
                <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Go to Note Review</button>
        </div>
    </div>
    )



}

export default OverallNotes;
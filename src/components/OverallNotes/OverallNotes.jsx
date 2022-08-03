import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function OverallNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [overallNotes, setOverallNotes] = useState('');

    const handleGoBack = () => {
        history.push('/support')
    };

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_OVERALL_NOTES',
            payload: overallNotes
        })
        history.push('/review')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>Do you have any additional comments you would like to add?</h1>
            <form>
                <input
                type="text"
                className="text-box"
                value = {overallNotes}
                onChange={(event) => setOverallNotes(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Go to Note Review</button>
        </div>
    </div>
    )



}

export default OverallNotes;
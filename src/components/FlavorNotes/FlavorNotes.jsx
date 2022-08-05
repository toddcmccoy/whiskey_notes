import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function FlavorNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [flavorNotes, setFlavorNotes] = useState('');

    const handleGoBack = () => {
        history.push('/flavorrating')
    };

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_FLAVOR_NOTES',
            payload: flavorNotes
        })
        history.push('/overallnotes')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>What flavors did you detect? Remember, no wrong answers. If you taste banana, you taste banana. Write it down.</h1>
            <form>
                <input
                type="text"
                className="text-box"
                value = {flavorNotes}
                onChange={(event) => setFlavorNotes(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Go to Overall Notes</button>
        </div>
    </div>
    )



}

export default FlavorNotes;
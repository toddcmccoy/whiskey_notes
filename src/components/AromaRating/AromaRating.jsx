import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function AromaRating(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [aromaRating, setAromaRating] = useState(1);

    const handleGoBack = () => {
        history.push('/newwhiskeynote')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    const handleSubmit = () => {
        if (aromaRating >= 1) {
            dispatch ({
            type: 'ADD_AROMA_RATING',
            payload: Number(aromaRating)
        })
        history.push('/aromanotes')
        } else {
            alert ('You must enter a number between 1 and 10. There are no wrong answers.')
        };
        
    }
    return(
        <div className = "container">
        <div className = "question-card">
        
            <h3>How would you rate the aroma intensity of this whiskey?</h3>
            <p>Please select a number between 1 and 10.<br />
            1 being 'It doesn't smell like much of anything. No alcohol burn and no distinct aromas.'<br />
            10 being 'Wow, those scents are powerful. And/or I think the alcohol vapors permanently damaged my nose.'<br /></p>
            <form>
                <input
                className= "number-input"
                type="number"
                min="1"
                max="10"
                value = {aromaRating}
                onChange={(event) => setAromaRating(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    </div>
    )



}

export default AromaRating;
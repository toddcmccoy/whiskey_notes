import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function FlavorRating(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [flavorRating, setFlavorRating] = useState(1);

    const handleGoBack = () => {
        history.push('/')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    const handleSubmit = () => {
        if (flavorRating >= 1) {
            dispatch ({
            type: 'ADD_FLAVOR_RATING',
            payload: Number(flavorRating)
        })
        history.push('/flavor_notes')
        } else {
            alert ('You must enter a number between 1 and 10. There are no wrong answers.')
        };
        
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>How would you rate the flavor intensity of this whiskey?</h1>
            <h2>Please select a number between 1 and 10.</h2>
            <h3>1 being 'It doesn't taste like much of anything. This is simply wet and mildly alcoholic, I think.'</h3>
            <h3>10 being 'Dang, that is intense. I'll let you know what I taste once my tastebuds heal.'</h3>
            <form>
                <input
                className= "number-input"
                type="number"
                min="1"
                max="10"
                value = {flavorRating}
                onChange={(event) => setFlavorRating(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    </div>
    )



}

export default FlavorRating;
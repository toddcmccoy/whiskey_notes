import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function FlavorRating(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [flavorRating, setFlavorRating] = useState(1);

    const handleGoBack = () => {
        history.push('/aromanotes')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    const handleSubmit = () => {
        if (flavorRating >= 1) {
            dispatch ({
            type: 'ADD_FLAVOR_RATING',
            payload: Number(flavorRating)
        })
        history.push('/flavornotes')
        } else {
            alert ('You must enter a number between 1 and 10. There are no wrong answers.')
        };
        
    }
    return(
        <div className = "container">
        <div className = "question-card">
        
            <h3>How would you rate the flavor intensity of this whiskey?</h3>
            <p>Please select a number between 1 and 10.<br />
            1 being 'It doesn't taste like much of anything. This is simply wet and mildly alcoholic, I think.'<br />
            10 being 'Dang, that is intense. I'll let you know what I taste once my tastebuds heal.'<br /></p>
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
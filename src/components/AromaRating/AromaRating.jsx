import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import swal from '@sweetalert/with-react'; 

function AromaRating(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [aromaRating, setAromaRating] = useState(1);

    const handleGoBack = () => {
        history.push('/newwhiskeynote')
    };

    const launchHowToSmell = () => {
        swal(
            <div>
                <h3>Tasting for analysis - Aromas</h3>
                <ol>
                    <li>Swirl the liquid in your glass - this will bring the aromas to the top of the glass</li>
                    <hr className="solid"></hr>
                    <li>Gently blow over the top of the glass - this will help disperse the heavy alcohol vapors</li>
                    <hr className="solid"></hr>
                    <li>Open your mouth slightly and inhale the aromas from 4-6 inches away from your nose<br />
                    A note of caution, especially to experienced wine tasters, do not bring the glass as close to your nose as you might with wine. 
                    The higher ABV in whiskey will ruin your sense of smell for about 20 minutes if you do.</li>
                    <hr className="solid"></hr>
                    <li>Move your glass away and take a breath</li>
                    <hr className="solid"></hr>
                    <li>Return the glass to a spot just below your nose and take in the aromas again</li>
                    <hr className="solid"></hr>
                    <li>Think about what you smell and write it down</li>
                </ol>
            </div>
        )

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
            <br />
            <p>New to smelling/tasting for analysis?</p><p className="aroma-flavor" onClick={launchHowToSmell}>Click here.</p>
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
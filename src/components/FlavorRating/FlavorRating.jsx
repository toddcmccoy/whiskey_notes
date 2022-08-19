import React from 'react';
import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 
import swal from '@sweetalert/with-react';

function FlavorRating(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [flavorRating, setFlavorRating] = useState(1);

    const launchHowToTaste = () => {
        swal(
            <div>
                <h3>Tasting for analysis - Flavors</h3>
                <ul>
                    <li>Gently swirl the liquid in your glass again</li>
                    <hr className="solid"></hr>
                    <li>Take a very small sip, but do not swallow immediately</li>
                    <hr className="solid"></hr>
                    <li>Let the whiskey coat your tongue</li>
                    <hr className="solid"></hr>
                    <li>Think about how your mouth feels, what do you taste?</li>
                    <hr className="solid"></hr>
                    <li>Swallow your whiskey</li>
                    <hr className="solid"></hr>
                    <li>Pause and repeat this process for a second and/or third small sip</li>
                    <hr className="solid"></hr>
                    <li>What flavors did you taste? What changed, if anything, with each sip?</li>
                    <hr className="solid"></hr>
                    <li>As you continue to learn and expand your experience 
                        try adding a drop of water or a single ice cube and see how that changes your taste.</li>
                </ul>
            </div>
        )
    };

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
        
            <h3 className="rating">How would you rate the flavor intensity of this whiskey?</h3>
            <p>New to tasting for analysis?</p><p className="aroma-flavor" onClick={launchHowToTaste}>Click here.</p>
            <p className="rating">Please select a number between 1 and 10.</p>
            
            <p>1 being 'It doesn't taste like much of anything. This is simply wet and mildly alcoholic, I think.'<br />
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
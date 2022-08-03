import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function AppHowToUse(){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleGoBack = () => {
        history.push('/')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>How do I use this app?</h1>

            <h3>This app is designed to help you slow down and analyze the whisk&#40;e&#41;y you are drinking. 
                Tasting whisk&#40;e&#41;y is a straightforward process, but it does require us to unlearn some behaviors. 
                We are not here to simply knock back a shot and move on with our day.

                We are here to savor our whisk&#40;e&#41;y.

                The app is designed to help you pace yourself and move through the tasting process step by step.

                Before you get started please check out our 
                How to Taste guide.</h3>
        <br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    </div>
    )



}

export default AppHowToUse;
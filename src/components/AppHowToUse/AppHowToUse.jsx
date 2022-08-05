import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function AppHowToUse(){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleGoBack = () => {
        history.push('/')
    };

    const handleGoDashboard = () => {
        history.push('/dashboard')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>How do I use this app?</h1>

            <h3>This app is designed to help you slow down and analyze the whisk&#40;e&#41;y you are drinking. 
                Tasting whisk&#40;e&#41;y is a straightforward process, but it does require us to unlearn some behaviors. 
                We are not here to simply knock back a shot and move on with our day.
                <br />
                We are here to savor our whisk&#40;e&#41;y.
                <br />
                The app is designed to help you pace yourself and move through the tasting process step by step.
                <br />
                Before you get started please check out our 
                How to Taste guide.</h3>
        <br />
            <button onClick={handleGoBack}>Previous</button>
            <br />
            <button onClick={handleGoDashboard}>Back to dashboard</button>
        </div>
    </div>
    )



}

export default AppHowToUse;
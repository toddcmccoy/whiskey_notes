import { useHistory } from "react-router-dom"


function AppHowToUse(){

    const history = useHistory();

    const handleGoDashboard = () => {
        history.push('/dashboard')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    
    return(
        <div className = "container">
            <div className = "question-card">
                <h2>How do I use this app?</h2>
                    <h3>We are here to savor our whisk&#40;e&#41;y.</h3><br />
                    <p>This app is designed to help you slow down and analyze the whisk&#40;e&#41;y you are drinking. 
                        <br />Tasting whisk&#40;e&#41;y is a straightforward process, but it does require us to unlearn some behaviors. 
                        <br />We are not here to simply knock back a shot and move on with our day.
                        <br />
                        The app is designed to help you pace yourself and move through the tasting process step by step.
                        <br /><br /></p>
                        
                        <h2>Do I have to use this for whiskey only?<br /></h2>
                        <p>Nope, this is a basic guide that can serve your journey with any spirit, even beer or wine if you wish.<br />
                        If you want to use it to track your favorite gins, have at it.</p>
                    <br />
                <br />
            <button onClick={handleGoDashboard}>Back to dashboard</button>
        </div>
    </div>
    )



}

export default AppHowToUse;
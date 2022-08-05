import { useHistory } from "react-router-dom"


function Education(){

    const history = useHistory();

    const handleGoDashboard = () => {
        history.push('/dashboard')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>What is bourbon?</h1>

                <h2>Bourbon as we know it</h2>
                <h3>Must be produced in the United States (since 1964)<br/>
                Must be aged in a new, charred oak container (since 1938)<br/>
                Aged for two years may be labeled “straight”<br/>
                Any bourbon aged less than four years must have an age statement on the label<br/>
                Must be distilled to less than 160 proof<br/>
                Must go into the oak container at 125 proof or less<br/>
                Must be bottled at a minimum of 80 proof<br/></h3>

                <h2>Bottle-in-Bond Act of 1897</h2>
                <h3>Must be distilled by one distiller<br/>
                Distilled during one distilling season (January to June or July to December)<br/>
                Aged in new charred oak containers for a minimum of four years in a Federally bonded warehouse<br/>
                Bottled at 100 proof in glass bottles</h3>
            <br />
            <br />
            <button onClick={handleGoDashboard}>Back to dashboard</button>
        </div>
    </div>
    )



}

export default Education;

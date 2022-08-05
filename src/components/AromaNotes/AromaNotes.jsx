import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function AromaNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [aromaNotes, setAromaNotes] = useState('');

    const handleGoBack = () => {
        history.push('/aromarating')
    };

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_AROMA_NOTES',
            payload: aromaNotes
        })
        history.push('/flavorrating')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <button onClick={handleGoBack}>Previous</button>
            <h1>What do you smell? Remember, no wrong answers. If you smell wet leather, record it here.</h1>
            <form>
                <input
                type="text"
                className="text-box"
                value = {aromaNotes}
                onChange={(event) => setAromaNotes(event.target.value)}
                />
            </form><br />
            
            <button onClick={handleSubmit}>Go to Flavor Rating</button>
        </div>
    </div>
    )



}

export default AromaNotes;
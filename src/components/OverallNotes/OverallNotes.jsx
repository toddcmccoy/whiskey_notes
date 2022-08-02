import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Comments(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const handleGoBack = () => {
        history.push('/support')
    };

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        history.push('/review')
    }
    return(
        <div className = "container">
        <div className = "question-card">
            <h1>Do you have any additional comments you would like to add?</h1>
            <form>
                <input
                type="text"
                className="text-box"
                value = {comments}
                onChange={(event) => setComments(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Go to Note Review</button>
        </div>
    </div>
    )



}

export default Comments;
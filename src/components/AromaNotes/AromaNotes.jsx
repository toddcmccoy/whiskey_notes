import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import swal from '@sweetalert/with-react';

function AromaNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [aromaNotes, setAromaNotes] = useState('');

    const launchAromas = () => {
        swal(
            <div>
              <h3>Common whiskey flavors and aromas</h3>
              <ul>
                <li>Fruit &#40;fresh, dried, baked&#41;</li>
                <li>Floral &#40;rose petals, perfume&#41;</li>
                <li>Vegetal &#40;fresh mown grass, dry leaves&#41;</li>
                <li>Charcoal &#40;smoke, fireplace&#41;</li>
                <li>Peaty &#40;wet earth, wet dog&#41;</li>
                <li>Wood &#40;oak&#41;</li>
                <li>Toffee &#40;caramel, butterscotch, vanilla&#41;</li>
                <li>Tobacco &#40;cigar box, leather&#41;</li>
                <li>Medicinal &#40;iodine, turpentine&#41;</li>
                <li>Spices &#40;all spice, clove, nutmeg&#41;</li>
              </ul>
            </div>
          )
    };

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
            
            <p>What do you smell? Remember, no wrong answers. <br />
            If you smell wet leather, record it here.</p>
            <p onClick={launchAromas}>Need some inspiration? Click here.</p>
            <form>
                <textarea
                type="text"
                className="text-box"
                value = {aromaNotes}
                onChange={(event) => setAromaNotes(event.target.value)}
                />
            </form><br />
            <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Go to Flavor Rating</button>
        </div>
    </div>
    )



}

export default AromaNotes;
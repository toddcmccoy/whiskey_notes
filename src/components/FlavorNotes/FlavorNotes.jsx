import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 
import swal from '@sweetalert/with-react';

function FlavorNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [flavorNotes, setFlavorNotes] = useState('');

    const launchFlavors = () => {
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
        history.push('/flavorrating')
    };

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_FLAVOR_NOTES',
            payload: flavorNotes
        })
        history.push('/overallnotes')
    }
    return(
        <div className = "container">
            <div className = "question-card">
               
                    <p>What do you taste? Remember, no wrong answers. <br />
                    If you taste banana, you taste banana. Write it down<br />
                    Taste and smell are very subjective. It is not important that your experience match anyone else's.<br />
                    It is important that you can relate to your notes.</p>
                    <p onClick={launchFlavors}>Need some inspiration? Click here.</p>
                        <form>
                            <textarea
                            type="text"
                            className="text-box"
                            value = {flavorNotes}
                            onChange={(event) => setFlavorNotes(event.target.value)}
                            />
                        </form><br />
                <button onClick={handleGoBack}>Previous</button>
            <button onClick={handleSubmit}>Go to Overall Notes</button>
        </div>
    </div>
    )



}

export default FlavorNotes;
import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 
import swal from 'sweetalert-with-react';

function FlavorNotes(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [flavorNotes, setFlavorNotes] = useState('');

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

    const launchFlavors = () => {
        swal(
            <div>
              <h3>Common whiskey flavors and aromas</h3>
              <ul>
                <li>Fruit &#40;fresh, dried, baked&#41;</li>
                <hr className="solid"></hr>
                <li>Floral &#40;rose petals, perfume&#41;</li>
                <hr className="solid"></hr>
                <li>Vegetal &#40;fresh mown grass, dry leaves&#41;</li>
                <hr className="solid"></hr>
                <li>Charcoal &#40;smoke, fireplace&#41;</li>
                <hr className="solid"></hr>
                <li>Peaty &#40;wet earth, wet dog&#41;</li>
                <hr className="solid"></hr>
                <li>Wood &#40;oak&#41;</li>
                <hr className="solid"></hr>
                <li>Toffee &#40;caramel, butterscotch, vanilla&#41;</li>
                <hr className="solid"></hr>
                <li>Tobacco &#40;cigar box, leather&#41;</li>
                <hr className="solid"></hr>
                <li>Medicinal &#40;iodine, turpentine&#41;</li>
                <hr className="solid"></hr>
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
               
                    <h3 className="rating">What do you taste? Remember, no wrong answers.</h3>
                    <p>If you taste banana, you taste banana. Write it down<br />
                    Taste and smell are very subjective. It is not important that your experience match anyone else's.<br />
                    It is important that you can relate to your notes.</p>
                    <p>New to tasting for analysis?</p><p className="aroma-flavor" onClick={launchHowToTaste}>Click here.</p>
                    <p>Need some inspiration?</p><p className="aroma-flavor" onClick={launchFlavors}>Click here.</p>
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
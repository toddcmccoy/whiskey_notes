import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import swal from 'sweetalert-with-react';

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

    const launchHowToSmell = () => {
        swal(
            <div>
                <h3>Tasting for analysis - Aromas</h3>
                <ul>
                    <li>Swirl the liquid in your glass - this will bring the aromas to the top of the glass</li>
                    <hr className="solid"></hr>
                    <li>Gently blow over the top of the glass - this will help disperse the heavy alcohol vapors</li>
                    <hr className="solid"></hr>
                    <li>Open your mouth slightly and inhale the aromas from 4-6 inches away from your nose<br />
                    A note of caution, especially to experienced wine tasters, do not bring the glass as close to your nose as you might with wine. 
                    The higher ABV in whiskey will ruin your sense of smell for about 20 minutes if you do.</li>
                    <hr className="solid"></hr>
                    <li>Move your glass away and take a breath</li>
                    <hr className="solid"></hr>
                    <li>Return the glass to a spot just below your nose and take in the aromas again</li>
                    <hr className="solid"></hr>
                    <li>Think about what you smell and write it down</li>
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
            
            <h3 className="rating">What do you smell? Remember, no wrong answers.</h3>
            <p>If you smell wet leather, record it here.</p>
            <p>New to whiskey analysis?</p><p className="aroma-flavor" onClick={launchHowToSmell}>Click here.</p>
            <p>Need some inspiration?</p><p className="aroma-flavor" onClick={launchAromas}>Click here.</p>
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
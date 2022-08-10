import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';


function NewWhiskeyNote(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [date, setDate] = useState('');
    const [whiskeyName, setWhiskeyName] = useState('');
    const [whiskeyAbv, setWhiskeyAbv] = useState('');
    const [whiskeyStyle, setWhiskeyStyle] = useState('');
    const [whiskeyCountry, setWhiskeyCountry] = useState('');
    const [whyThisWhiskey, setWhyThisWhiskey] = useState('');

    const handleSubmit = () => {
        dispatch ({
            type: 'ADD_DATE',
            payload: date
        });
        dispatch ({
            type: 'ADD_WHISKEY_NAME',
            payload: whiskeyName
        });
        dispatch ({
            type: 'ADD_WHISKEY_ABV',
            payload: whiskeyAbv
        });
        dispatch ({
            type: 'ADD_WHISKEY_STYLE',
            payload: whiskeyStyle
        });
        dispatch ({
            type: 'ADD_WHISKEY_COUNTRY',
            payload: whiskeyCountry
        });
        dispatch ({
            type: 'ADD_WHY_THIS_WHISKEY',
            payload: whyThisWhiskey
        })
        history.push('/aromarating')
    }

    return(
        <div className = "container">
            <div className = "question-card">
                <h1>New Whisk&#40;e&#41;y Note</h1>
                <form>
                    <label htmlFor="review-date">Enter the date for your whisk&#40;e&#41;y note</label>
                    <input
                    id="review-date"
                    type="date"
                    value = {date}
                    onChange={(event) => setDate(event.target.value)}
                    />

                    <br />
                    <label htmlFor="whiskey-name">Enter the name of your whisk&#40;e&#41;y</label>
                    <input
                    id="whiskey-name"
                    type="text"
                    placeholder="Whiskey Name"
                    value = {whiskeyName}
                    onChange={(event) => setWhiskeyName(event.target.value)}
                    />
                    <label for="abv">Enter the Alcohol By Volume &#40;ABV&#41; of your whisk&#40;e&#41;y</label>
                    <input
                    id="abv"
                    type="text"
                    placeholder="Alcohol By Volume"
                    value = {whiskeyAbv}
                    onChange={(event) => setWhiskeyAbv(event.target.value)}
                    />

                    <br />

                    
                    <label htmlFor="whiskeyStyle">Select the style of your whisk&#40;e&#41;y</label>
                    <select id="whiskeyStyle" 
                    name="whiskeyStyle"
                    value = {whiskeyStyle}
                    onChange={(event) => setWhiskeyStyle(event.target.value)}
                    >
                    <option value="Select">Select a Style</option>
                    <option value="Blend">Blend</option>
                    <option value="Bourbon">Bourbon</option>
                    <option value="Grain">Grain</option>
                    <option value="Malt">Malt</option>
                    <option value="Rye">Rye</option>
                    <option value="Other">Other</option>
                    </select>
                    <br />
                
                    
                    <label htmlFor="whiskeyCountry">Select the country of origin of your whisk&#40;e&#41;y</label>
                    <select id="whiskeyCountry" 
                    name="whiskeyCountry"
                    value = {whiskeyCountry}
                    onChange={(event) => setWhiskeyCountry(event.target.value)}
                    >
                    <option value="Select">Select a Country</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Japan">Japan</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="USA">USA</option>
                    <option value="Wales">Wales</option>
                    <option value="Other">Other</option>
                    </select>

                    <br />

                    <label htmlFor="whythisbottle">Why did you pick this whisk&#40;e&#41;y?</label>
                    <textarea
                    id="whythisbottle"
                    type="textarea"
                    className="textarea"
                    value = {whyThisWhiskey}
                    onChange={(event) => setWhyThisWhiskey(event.target.value)}
                    /><br />
                    

                </form>

                <button onClick={handleSubmit}>Go to Aroma Rating</button>
            </div>
        </div>
    )

}

export default NewWhiskeyNote;
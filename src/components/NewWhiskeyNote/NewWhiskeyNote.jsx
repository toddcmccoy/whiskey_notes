import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
// import Dropdown, { onSelect } from 'react-dropdown';
// import 'react-dropdown/style.css';

function NewWhiskeyNote(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [date, setDate] = useState('');
    const [whiskeyName, setWhiskeyName] = useState('');
    const [whiskeyAbv, setWhiskeyAbv] = useState('');
    const [whiskeyStyle, setWhiskeyStyle] = useState('');
    const [whiskeyCountry, setWhiskeyCountry] = useState('');
    const [whyThisWhiskey, setWhyThisWhiskey] = useState('');

    // const styleOptions = [
    //     'Blend', 'Bourbon', 'Grain', 'Malt', 'Rye', 'Other'
    // ];
    // const defaultStyleOption = styleOptions[0];

    // const countryOptions = [
    //     'Canada', 'India', 'Ireland', 'Japan', 'Scotland', 'Taiwan', 'USA', 'Wales', 'Other'
    // ];
    // const defaultCountryOption = countryOptions[0];
    

    // const handleGoBack = () => {
    //     history.push('/')
    // };

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
        history.push('/aromarating')
    }

    return(
        <div className = "container">
            <div className = "question-card">
                <form>
                    <input
                    type="date"
                    value = {date}
                    onChange={(event) => setDate(event.target.value)}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Whiskey Name"
                    value = {whiskeyName}
                    onChange={(event) => setWhiskeyName(event.target.value)}
                    />
                
                    <input
                    type="text"
                    placeholder="Alcohol By Volume"
                    value = {whiskeyAbv}
                    onChange={(event) => setWhiskeyAbv(event.target.value)}
                    />
                    <br />
                    <input
                    type="text"
                    placeholder="Whiskey Style"
                    value = {whiskeyStyle}
                    onChange={(event) => setWhiskeyStyle(event.target.value)}
                    />
                
                    <input
                    type="text"
                    placeholder="Country of Origin"
                    value = {whiskeyCountry}
                    onChange={(event) => setWhiskeyCountry(event.target.value)}
                    />
                {/* <Dropdown options={styleOptions} 
                // onChange={this.onSelect} 
                value={defaultStyleOption}
                placeholder="Select whisk&#40;e&#41;y style" />
                <br />
                <Dropdown options={countryOptions}
                // onChange={this.onSelect}
                value = {defaultCountryOption}  
                placeholder="Select country of origin" /> */}
                    <br />
                    <input
                    type="text"
                    placeholder="Why this bottle?"
                    className="text-box"
                    value = {whyThisWhiskey}
                    onChange={(event) => setWhyThisWhiskey(event.target.value)}
                    />
                </form>

                <button onClick={handleSubmit}>Go to Aroma Rating</button>
            </div>
        </div>
    )

}

export default NewWhiskeyNote;
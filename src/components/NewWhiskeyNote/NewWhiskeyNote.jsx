import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

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
                        <Box sx={{ maxWidth: 240 }}>
                        <FormControl fullWidth>
                        <InputLabel id="whiskey-style">Whiskey Style</InputLabel>
                        <Select
                        labelId="whiskey-style"
                        id="whiskey-style"
                        value={whiskeyStyle}
                        label="Whiskey Style"
                        onChange={(event) => setWhiskeyStyle(event.target.value)}
                        >
                        <MenuItem value={'Blend'}>Blend</MenuItem>
                        <MenuItem value={'Bourbon'}>Bourbon</MenuItem>
                        <MenuItem value={'Grain'}>Grain</MenuItem>
                        <MenuItem value={'Malt'}>Malt</MenuItem>
                        <MenuItem value={'Rye'}>Rye</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                        </FormControl>
                        </Box>

                    {/* <input
                    type="text"
                    placeholder="Whiskey Style"
                    value = {whiskeyStyle}
                    onChange={(event) => setWhiskeyStyle(event.target.value)}
                    /> */}
                
                    <input
                    type="text"
                    placeholder="Country of Origin"
                    value = {whiskeyCountry}
                    onChange={(event) => setWhiskeyCountry(event.target.value)}
                    />
                    <br />
                    <p>Why did you pick this whiskey?</p>
                    <input
                    type="text"
                    placeholder="Why this bottle?"
                    className="text-box"
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
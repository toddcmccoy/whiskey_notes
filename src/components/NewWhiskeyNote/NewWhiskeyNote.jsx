import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import { makeStyles } from '@mui/core/styles';


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
        <Box width="90%">
            <Grid container spacing={3}
                sx={{
                justifyContent: "space-evenly",
                alignItems: "center"
                }}
                >
                    <Box width="25%">
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                    <input
                    type="date"
                    value = {date}
                    onChange={(event) => setDate(event.target.value)}
                    />
                    </Grid>
                    </Box>

                    <Box width="25%">
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                    <input
                    type="text"
                    placeholder="Whiskey Name"
                    value = {whiskeyName}
                    onChange={(event) => setWhiskeyName(event.target.value)}
                    />
                    </Grid>
                    </Box>

                    <Box width="25%">
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                    <input
                    type="text"
                    placeholder="Alcohol By Volume"
                    value = {whiskeyAbv}
                    onChange={(event) => setWhiskeyAbv(event.target.value)}
                    />
                    </Grid>
                    </Box>

                        <Box width={240}>
                        <Grid item xs={12} sm={12} md={8} lg={6}>
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
                        </Grid>
                        </Box>

                        <Box
                            width="100%"
                            >
                        <Grid item xs={12} sm={12} md={8} lg={6}>
                        <InputLabel id="whiskey-country">Whiskey Country</InputLabel>
                        <Select
                        labelId="whiskey-country"
                        id="whiskey-country"
                        value={whiskeyCountry}
                        label="Whiskey Country"
                        onChange={(event) => setWhiskeyCountry(event.target.value)}
                        >
                        <MenuItem value={'Canada'}>Canada</MenuItem>
                        <MenuItem value={'India'}>India</MenuItem>
                        <MenuItem value={'Ireland'}>Ireland</MenuItem>
                        <MenuItem value={'Japan'}>Japan</MenuItem>
                        <MenuItem value={'Scotland'}>Scotland</MenuItem>
                        <MenuItem value={'Taiwan'}>Taiwan</MenuItem>
                        <MenuItem value={'USA'}>USA</MenuItem>
                        <MenuItem value={'Wales'}>Wales</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                        </Grid>
                        </Box>
                    <Box>
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                    
                    <p>Why did you pick this whiskey?</p>
                    <input
                    type="text"
                    placeholder="Why this bottle?"
                    className="text-box"
                    value = {whyThisWhiskey}
                    onChange={(event) => setWhyThisWhiskey(event.target.value)}
                    /><br />
                    </Grid>
                    </Box>
                    
                <Box>   
                <Grid item xs={12} sm={12} md={8} lg={6}>
                <button onClick={handleSubmit}>Go to Aroma Rating</button>
                </Grid>
                </Box>
            </Grid>
        </Box>
    )

}

export default NewWhiskeyNote;
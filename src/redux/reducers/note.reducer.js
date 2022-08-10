import { combineReducers } from 'redux';


// reducer for the GET request to grab information stored in the database
const notesReducer = (state = [], action) => {
    switch (action.type){
        case 'GET_TASTING_NOTES':
            return action.payload;
		default:
            return state;
	}
};

// reducer for the PUT request to submit updated notes
const editNoteReducer = (state  = {}, action) => {
    if (action.type === 'SET_EDIT_NOTE'){
		console.log('this is the payload:', action.payload);
        // action.payload is the object from the database
        return action.payload
    }
    else if (action.type === 'EDIT_ONCHANGE'){
        return{
            // spread - give me all of the note
            ...state,
            // then change this one in particular
            [action.payload.property]: action.payload.value
            // ^-Property               ^-Value
        }
    }else if(action.type === 'EDIT_CLEAR' ){
        return { 
			whiskey_abv: '',
			whiskey_style: '',
            whiskey_country: '',
            why_this_whiskey: '',
            aroma_rating: '',
            aroma_notes: '',
            flavor_rating: '',
            flavor_notes: '',
            overall_notes: '',
            buy_again: '',
            overall_rating: '',
		};
    }
    return state;
}

// reducer for adding the date to the whiskey note
const dateReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_DATE':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the name to the whiskey note
const whiskeyNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_NAME':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the ABV to the whiskey note
const whiskeyAbvReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_ABV':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the style to the whiskey note
const whiskeyStyleReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_STYLE':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the country of origin to the whiskey note
const whiskeyCountryReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_COUNTRY':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the reason for purchase to the whiskey note
const whyThisWhiskeyReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHY_THIS_WHISKEY':
			return action.payload;
		default:
			return state;
	}
};

// reducer for aroma rating question
const aromaRatingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_AROMA_RATING':
			return action.payload;
		default:
			return state;
	}
};

// reducer for flavor rating question
const flavorRatingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_FLAVOR_RATING':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the overall to the whiskey note
const overallRatingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_OVERALL_RATING':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the flavor notes to the whiskey note
const flavorNotesReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_FLAVOR_NOTES':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding the aroma notes to the whiskey note
const aromaNotesReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_AROMA_NOTES':
			return action.payload;
		default:
			return state;
	}
};

//reducer for additional comments
const overallNotesReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_OVERALL_NOTES':
			return action.payload;
		default:
			return state;
	}
};

// reducer for adding whether you'd buy it again to the whiskey note
const buyAgainReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_BUY_AGAIN':
			return action.payload;
		default:
			return state;
	}
};

// sending out all the reducers
export default combineReducers({
	notesReducer,
    aromaNotesReducer,
    aromaRatingReducer,
    flavorNotesReducer,
    flavorRatingReducer,
    dateReducer,
    whiskeyAbvReducer,
    whiskeyNameReducer,
    whiskeyStyleReducer,
    whiskeyCountryReducer,
    whyThisWhiskeyReducer,
    overallNotesReducer,
    buyAgainReducer,
	overallRatingReducer,
	editNoteReducer
});

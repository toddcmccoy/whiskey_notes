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

const editNoteReducer = (state  = {}, action) => {
    if (action.type === 'SET_EDIT_NOTE'){
        // action.payload is the object from the database
        return action.payload
    }
    else if (action.type === 'EDIT_ONCHANGE'){
        return{
            // spread - give me all of the object
            ...state,
            // then change this one in particular
            [action.payload.property]: action.payload.value
            // ^-Property               ^-Value
        }
    } 
	// else if(action.type ==='EDIT_CLEAR'){
    //     return { github_name: ''};
    // }
    return state;
}

const dateReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_DATE':
			return action.payload;
		default:
			return state;
	}
};


const whiskeyNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_NAME':
			return action.payload;
		default:
			return state;
	}
};

const whiskeyAbvReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_ABV':
			return action.payload;
		default:
			return state;
	}
};

const whiskeyStyleReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_STYLE':
			return action.payload;
		default:
			return state;
	}
};

const whiskeyCountryReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_COUNTRY':
			return action.payload;
		default:
			return state;
	}
};

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
// reducer for understanding question
const flavorRatingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_FLAVOR_RATING':
			return action.payload;
		default:
			return state;
	}
};

const overallRatingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_OVERALL_RATING':
			return action.payload;
		default:
			return state;
	}
};

const flavorNotesReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_FLAVOR_NOTES':
			return action.payload;
		default:
			return state;
	}
};

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

const buyAgainReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_BUY_AGAIN':
			return action.payload;
		default:
			return state;
	}
};

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

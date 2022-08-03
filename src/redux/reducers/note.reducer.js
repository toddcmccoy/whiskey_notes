import { combineReducers } from 'redux';
// reducer for the GET request to grab information stored in the database
// const feedbackReducer = (state = [], action) => {
//     switch (action.type){
//         case 'GET_FEEDBACK':
//             return action.payload;
//         }
//             return state;
// };

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
const whiskeyNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_WHISKEY_NAME':
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

export default combineReducers({
    aromaNotesReducer,
    aromaRatingReducer,
    flavorNotesReducer,
    flavorRatingReducer,
    whiskeyNameReducer,
    overallNotesReducer
  });

// creating store to keep info from all reducers
// const storeInstance = createStore(
// combineReducers({
//     feedbackReducer,
//     commentsReducer,
//     supportReducer,
//     understandingReducer,
//     feelingReducer
// }),
// applyMiddleware(logger),
// );

// // Provider
// ReactDOM.render
// (<Provider store = { storeInstance }>
//     <App />
// </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';




function* fetchUserNotes() {
    // get all notes from the DB
    try {
        const notes = yield axios.get('/api/notes');
        console.log('get all:', notes.data);
        yield put({ type: 'GET_TASTING_NOTES', payload: notes.data });
    } catch {
        console.log('get all error');
    }
        
}

function* userNoteSaga() {
    yield takeEvery('FETCH_NOTES', fetchUserNotes);
}

export default userNoteSaga;
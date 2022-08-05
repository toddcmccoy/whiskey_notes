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

function* deleteNote(action) {
    console.log('this is action', action.payload);
    try {
      yield axios.delete(`/api/notes/${action.payload}`)
      yield put({type: 'DELETE_NOTE'});
    }
    catch (error) {
      console.log('item is too strong to be deleted', error);
    }
  }

function* userNoteSaga() {
    yield takeEvery('FETCH_NOTES', fetchUserNotes);
    yield takeEvery('REMOVE_NOTE', deleteNote);
}

export default userNoteSaga;
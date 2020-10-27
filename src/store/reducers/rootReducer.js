import authReducer from "./authReducer";
//import projectReducer from "./projectReducer";
import noticeReducer from './noticeReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore'
const rootReducer = combineReducers({
    auth: authReducer,
    // project: projectReducer,
    notice: noticeReducer,
    fireStore: firestoreReducer,
    firebase: firebaseReducer

});

export default rootReducer
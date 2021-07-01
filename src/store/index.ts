import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  FirestoreReducer,
  firestoreReducer,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  FirebaseReducer,
  firebaseReducer,
  getFirebase,
} from "react-redux-firebase";
import * as SharedTypes from "shared/types";
import thunk from "redux-thunk";

const firebaseConfig = {
  apiKey: "AIzaSyDi7PaBBm42mLCJzbcVUAkgyfl3e2WLclE",
  authDomain: "react-quiz-cc8fc.firebaseapp.com",
  projectId: "react-quiz-cc8fc",
  storageBucket: "react-quiz-cc8fc.appspot.com",
  messagingSenderId: "560800766864",
  appId: "1:560800766864:web:50061808e97706c7cab115",
  measurementId: "G-XWH5HVKNTH",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "profiles",
  useFirestoreForProfile: true,
  // enableClaims: true,
};

export interface FirestoreSchema {
  profiles: SharedTypes.Profile[];
  games: SharedTypes.Game[];
}

export interface RootState {
  firebase: FirebaseReducer.Reducer<any>;
  firestore: FirestoreReducer.Reducer<FirestoreSchema>;
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument(
      { getFirebase, getFirestore }, // eslint-disable-next-line
      // @ts-ignore,
      window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-next-line
        // @ts-ignore,
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;

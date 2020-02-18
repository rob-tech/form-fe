import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import experienceReducer from "../reducers/experiences";
import errReducer from "../reducers/errMess"
import loadReducer from "../reducers/loader"
import userReducer from "../reducers/user"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  errMess: {
    message: null,
    succMessage: null
  },
  loader: {
    loading: false
  },
  experiences: {
    allExperiences: [],
    experience: {}
  },
  user: {
    user: {},
    token: undefined,
    newUser: {},
  },

};

const combReducer = combineReducers({ experiences: experienceReducer, loader: loadReducer, errMess: errReducer, user: userReducer});

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

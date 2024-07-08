const { createStore, compose } = Redux;
import { contactService } from "../services/contact.service.js";

export const SET_CONTACTS = "SET_CONTACTS";

// Initial state of the Redux store
const initialState = {
  contacts: [],
};

// Reducer function to handle actions and update the state
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      // Directly update the contacts state with the provided data
      return {
        ...state,
        contacts: action.contacts,
      };

    default:
      return state;
  }
}

// Setup Redux DevTools if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(appReducer, composeEnhancers());

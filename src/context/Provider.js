import React, { useReducer, createContext } from 'react';
import authInitialState from './initialStates/authState';
import contactsInitialState from './initialStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

//authState=current state in time
//authDispatch=dispatch function
export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);
    return (
        <GlobalContext.Provider value={{ authState, contactsState, authDispatch, contactsDispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
export default GlobalProvider;
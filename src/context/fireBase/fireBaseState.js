import React, {useReducer} from 'react';
import {FireBaseContext} from "./fireBaseContext";
import fireBaseReducer from "./fireBaseReducer";

export const FireBaseState = ({children}) => {
    const initialiseState = {
        notes: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(fireBaseReducer, initialiseState);

    return (
        <FireBaseContext.Provider value={{

        }}>

            {children}
        </FireBaseContext.Provider>
    )
}

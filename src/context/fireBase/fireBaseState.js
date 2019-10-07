import React, {useReducer} from 'react';
import {FireBaseContext} from "./fireBaseContext";
import fireBaseReducer, {ADD_NOTE, FETCH_NOTE, REMOVE_NOTE, SHOW_LOADER} from "./fireBaseReducer";
import axios from 'axios'

const url = process.env.REACT_APP_DB_URL;


export const FireBaseState = ({children}) => {
    const initialiseState = {
        notes: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(fireBaseReducer, initialiseState);

    const showLoader = () => dispatch({type: SHOW_LOADER});
    const fetchNotes = async () => {
        showLoader();
        let res = await axios.get(`${url}/notes.json`)
        // console.log(res.data)
        const payload =  Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id:key
            }
        })
        dispatch({
            type:FETCH_NOTE,
            payload
        })
    };

    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note);
            // console.log(res)
            const payload = {
                ...note,
                id:res.data.name
            };
            dispatch({
                type: ADD_NOTE,
                payload
            })
        }catch (e) {
            throw new Error(e.message)
        }


    };



        const removeNote = async  id => {
            await axios.delete(`${url}/notes/${id}.json`)
            dispatch({
                type:REMOVE_NOTE,
                payload:id
            })
        };


    return (
        <FireBaseContext.Provider value={{
            showLoader,addNote,fetchNotes,removeNote,
            loading:state.loading,
            notes:state.notes,
        }}>

            {children}
        </FireBaseContext.Provider>
    )
};

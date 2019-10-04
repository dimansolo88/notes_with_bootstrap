import React, {useContext, useEffect} from 'react';
import Form from "./Form";
import Notes from "./Notes";
import {FireBaseContext} from "../context/fireBase/fireBaseContext";
import Loader from "./Loader";


const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FireBaseContext);
    useEffect(() => {
        fetchNotes()
    }, []);


    return <div>
        <Form/>
        {loading
            ? <Loader/> : <Notes notes={notes}/>}

    </div>
};

export default Home;
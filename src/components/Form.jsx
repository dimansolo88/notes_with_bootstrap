import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alertContext";


const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()
        if(value.trim()) {
            alert.show("note was creating ", 'success')
            setValue('')
        }
        else {
            alert.show("please entree your note ")
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input type="text" className='form-control'
                       placeholder="enter your note  "
                       value={value}
                       onChange={e => setValue(e.currentTarget.value)}/>

            </div>
        </form>
    )
};

export default Form
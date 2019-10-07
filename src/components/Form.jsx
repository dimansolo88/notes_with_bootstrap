import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alertContext";
import {FireBaseContext} from "../context/fireBase/fireBaseContext";


const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext)
    const fireBase = useContext(FireBaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if(value.trim()) {
            fireBase.addNote(value.trim()).then( () => {
                alert.show("note was creating ", 'success')

            }).catch(() => {
                alert.show(" note was not created ", 'danger')
            })
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
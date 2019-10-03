import React, {useContext} from 'react';
import {AlertContext} from "../context/alertContext";


const Alert = () => {

    const {alert, hide} = useContext(AlertContext);

    if(!alert.visible) {
        return null
    }


    return <div className={`alert alert-${alert.type || "Warning"} alert-dismissible`}>
        <strong> ! </strong>
        {alert.text}
        <button type="button" onClick={hide} className="close"  aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
};

export default Alert
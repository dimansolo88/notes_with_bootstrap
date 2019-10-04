import React from 'react';

const Notes = ({notes}) => {

    return (
        <ul className="list-group">
            {notes.map(n => <li key={n.id} className="list-group-item notes">
                <div>
                    <strong>{n.title}</strong>
                    <small> {new Date().toLocaleDateString()} </small>
                </div>
                <button type='button' className='btn btn-outline-danger btn-sm '> &times; </button>
            </li>)}


        </ul>
    )

};

export default Notes
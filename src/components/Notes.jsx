import React from 'react';

const Notes = ({notes,onRemove}) => {

    return (
        <ul className="list-group">
            {notes.map(n => <li key={n.id} className="list-group-item notes">
                <div>
                    <strong>{n.title}</strong>
                    <small> {n.data} </small>
                </div>
                <button type='button' className='btn btn-outline-danger btn-sm '
                        onClick={() => {onRemove(n.id)}}> &times; </button>
            </li>)}


        </ul>
    )

};

export default Notes
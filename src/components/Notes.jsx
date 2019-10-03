import React from 'react';

const Notes = () => {

    let notes = [
        {id: 1, title: "JS"},
        {id: 2, title: "JS"},
        {id: 3, title: "JS"},
        {id: 4, title: "JS"},
    ]
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
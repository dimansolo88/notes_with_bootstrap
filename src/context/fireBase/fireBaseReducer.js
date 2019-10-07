export let SHOW_LOADER = 'SN/FIREBASE_REDUCER/SHOW_LOADER';
export let ADD_NOTE = 'SN/FIREBASE_REDUCER/ADD_NOTE';
export let FETCH_NOTE = 'SN/FIREBASE_REDUCER/FETCH_NOTE';
export let REMOVE_NOTE = 'SN/FIREBASE_REDUCER/REMOVE_NOTE';


const handlers = {
    [SHOW_LOADER]:state => ({...state,loading:true}),
    [ADD_NOTE]:( state, {payload}) => ({
        ...state, notes:[...state.notes,payload]
    }),

    [FETCH_NOTE]: (state,{payload} ) => ({
        ...state,notes:payload, loading: false
    }),
    [REMOVE_NOTE]: (state,{payload}) => ({
        ...state,
        notes:state.notes.filter(n => n.id !== payload)
    }),
    DEFAULT: state => state
}

const fireBaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)

}

export default fireBaseReducer
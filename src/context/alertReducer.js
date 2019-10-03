export let SHOW_ALERT = "SN/ALERT_REDUCER_SHOW_ALERT";
export  let HIDE_ALERT = "SN/ALERT_REDUCER_HIDE_ALERT";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    DEFAULT: state => state
};

const AlertReducer = (state, action ) => {
        const handle = handlers[action.type] || handlers.DEFAULT;
        return handle(state, action)
    };


export default AlertReducer
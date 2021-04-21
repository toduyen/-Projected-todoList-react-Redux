const reducerChangeStateInitialState = false
const reducerChangeState = (state = reducerChangeStateInitialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE_NAME":
            return !state
        default:
            return state
    }
}
export default reducerChangeState;
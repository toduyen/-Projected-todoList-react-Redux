import reducerChangeState from '../reducer/reducerChangeState';

var redux = require('redux');
// const TempValue = {
//     name: ['tuan','phan','kim'],
//     statusName: false
// }
// let reducer = (status=TempValue , action) => {
//     switch (action.type) {
//         case "CHANGE_VALUE_NAME":
//             return{...status,statusName:!status.statusName}
//             case "ADD_NEW_VALUE":
//                 return{...status,name:[...status.name,action.newitem]}
//                 case "REMOVE_VALUE_INDEX":
//                     return{...status,name:status.name.filter((value,key) => key != action.valueIndex)}
//         default:
//             return status;
//     }
// }
const AddValueInitialState = ['tuan','yeu','duyen'];
const AddValue = (state = AddValueInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW_VALUE":
            return [...state,action.newitem]
        default:
            return state
    }
}
const DeleteValueInitialState = ['tuan','yeu','duyen']
const DeleteValue = (state = DeleteValueInitialState, action) => {
    switch (action.type) {
        case "REMOVE_VALUE_INDEX":
            return state.filter((value , key) => key != action.valueIndex)
        default:
            return state
    }
}
let allReducer = redux.combineReducers({
    nameAdd: AddValue,
    nameDelete: DeleteValue,
    changeStatus: reducerChangeState
})
let store = redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({type:'CHANGE_VALUE_NAME'});
store.dispatch({type:'ADD_NEW_VALUE',newitem:"Master"});
store.dispatch({type:'REMOVE_VALUE_INDEX',valueIndex:0});

export default store;
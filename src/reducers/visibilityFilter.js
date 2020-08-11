// const visibilityFilter = (state='SHOW_ALL',action)=>{
//     switch (action.type) {
//         case 'SET_VISIBILITY_FILTER':
//             return action.filter
//             break;
    
//         default:
//             return state
//             break;
//     }
// }
function setVisibility(state,action){
        return action.filter
}
//reducers 生成函数
function createReducers(ininState,handlers){
    return function reducer(state =ininState,action ){
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state,action)
        }else{
            return state
        }
    }
}
const visibilityFilter = createReducers('SHOW_ALL',{
    'SET_VISIBILITY_FILTER':setVisibility
})
export default visibilityFilter

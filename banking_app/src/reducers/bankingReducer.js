
const initialState = {
    balance :0,
    interset:0,
    isSavingAccount :false,
}


 export const bankingReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'DEPOSIT':
            return {...state, balance : state.balance + action.payload}
        case 'WITHDRAW':
            return {...state , balance : state.balance - action.payload}
        case 'COLLECTION_INTERSET':
            return {...state,interset : state.interset * 0.3}
        case 'DELETE_ACCOUNT':
                return {...state, balance :0 , interset: 0}
        case 'TOGGLE':
            return {...state,isSavingAccount: !state.isSavingAccount}        
        default:
            return state
       
    }
}
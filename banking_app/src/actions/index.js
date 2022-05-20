export const deposit = (amount) => {
    return{
        type : "DEPOSIT",
        payload : amount,
    }
    
}

export const withDraw = amount => {
    return{
        type:"WITHDRAW",
        payload :amount,
    }

}
export const collectInterset = amount => {
    return{
        type:"COLLECT_INTERSET",
        
    }

}
export const deleteAccount = amount => {
    return{
        type:"DELETE_ACCOUNT",
        
    }

}
export const toggleAccount = amount => {
    return{
        type:"TOGGLE",
        
    }

}


export const updateMessage = (message) => {
    return (dispatch) => { 
        dispatch({ type:'UPDATE_MESSAGE', message})
    } 
}

export const createTransaction = (transaction) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //call db
        const firestore = getFirestore();
        firestore.collection('transactions').add({
          ...transaction,
          primaryUser: 'user1',//TODO: replace with account's main user id
          user: 'user2',
          createdAt: new Date()
          // catagory:'new',

        }).then(() => {
            dispatch({type: 'CREATE_TRANSACTION', transaction});
        }).catch((err)=> {
            console.log('ERROR: ', err)
            dispatch({type:'CREATE_TRANSACTION_ERROR', err})
        })
    }
}

export const createAccount = (account) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //call db
        const firestore = getFirestore();
        firestore.collection('accounts').add({
          ...account,
          cleared_balance: 0,
          primaryUser: 'user1',//TODO: replace with account's main user id
          uncleared_balance: 0,
        }).then(() => {
            dispatch({type: 'CREATE_ACCOUNT', account});
        }).catch((err)=> {
            console.log('ERROR: ', err)
            dispatch({type:'CREATE_ACCOUNT_ERROR', err})
        })
    }
}

export const editTransaction = () => {
}

export const deleteTransaction = () => {
}

export const editAccount = () => {
}

export const deleteAccount = () => {
}

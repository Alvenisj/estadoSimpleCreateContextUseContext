const types = {

    authLogin: 'auth - login',
    authLogout: 'auth - logout',
    productDeleteAll: 'product - delete - all',
    productChange: 'product - change'

}

const initialState = {

    user: { id: 1, name: 'Luis'},
    products: [
        { id: 1, title: 'Product #1'},
        { id: 2, title: 'Product #2'},
        { id: 3, title: 'Product #3'},
        { id: 4, title: 'Product #4'}
    ]

}

const ReducerStore = (state, action) => {

switch(action.type) {
    case types.authLogout:
        return {
            ...state,
            user: null
        }

    case types.authLogin:
        return {
            ...state,
            user: action.payload        
        }
    case types.productDeleteAll:
        return {
            ...state,
            products: []
        }
    case types.productChange:
        return {
            ...state,
            products: [{id:5, title: 'product #5'}]
        }
    

    default:
        return state;
}

    
}

export { initialState, types }
export default ReducerStore;
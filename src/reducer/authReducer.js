const initialState = {
    isAuthenticated: false,
    redirectUrl: '',
    currentUser: null,
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            state = {
                ...state,
                isAuthenticated: true,
                error: {},
                currentUser: action.payload
            };
            return state;
        case 'LOGIN_ERROR':            
            state = {
                ...state,
                isAuthenticated: false,
                currentUser: null,
                error: action.payload
            };
            return state;
        default:
            return state;
    }
};
export default store;

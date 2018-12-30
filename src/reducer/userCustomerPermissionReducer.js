const initialState = {
    menus: [],
    error: {}
};

const store = (state = initialState, action) => {
    
    switch (action.type) {
        case 'USER_PERMISSION_SUCCESS':
            state = {
                ...state,
                menus: action.payload
            };
            return state;
        case 'USER_PERMISSION_ERROR':
            state = {
                ...state,
                error: action.payload
            };
            return state;
        default:
            return state;
    }
};
export default store;

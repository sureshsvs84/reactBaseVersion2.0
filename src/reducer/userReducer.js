const initialState = {
    data: {},
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_INFO_SUCCESS':
            state = {
                ...state,
                data: action.payload
            };
            return state;
        case 'USER_INFO_ERROR':
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

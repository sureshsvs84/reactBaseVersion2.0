const initialState = {
    CurrentMonth: [],
    Last3Month: [],
    Last6Month: [],
    Last13Month: [],
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'PERIODICITY_SUCCESS':
            state = {
                ...state,
                data: action.payload
            };
            return state;
        case 'PERIODICITY_ERROR':
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

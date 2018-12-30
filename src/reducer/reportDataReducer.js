const initialState = {
    reportdata: {},
    error: {}
};

const store = (state = initialState, action) => {    
    switch (action.type) {
        case 'REPORT_DATA_SUCCESS':            
            state = {
                ...state,
                reportdata: action.payload
            };
            return state;
        case 'REPORT_DATA_ERROR':
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

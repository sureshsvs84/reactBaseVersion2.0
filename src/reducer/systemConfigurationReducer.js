const initialState = {
    data: {Version:'1.0.2',Build:'1',LastUpdate:'1-jan-2018'},
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'SYSTEM_CONFIGURATION_SUCCESS':
            state = {
                ...state,
                data: action.payload.item
            };
            return state;
        case 'SYSTEM_CONFIGURATION_ERROR':
            state = {
                ...state,
                data :{},
                error: action.payload
            };
            return state;
        default:
            return state;
    }
};
export default store;

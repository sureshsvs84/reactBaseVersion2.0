const initialState = {
    dimensions: [
        {
            type: "",
            sequenceno: 0,
            name: "",
            value: {
                id: "sting",
                name: ""
            }
        }
    ],
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'DIMENSION_SUCCESS':
            state = {
                ...state,
                dimensions: action.payload
            };
            return state;
        case 'DIMENSION_ERROR':
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

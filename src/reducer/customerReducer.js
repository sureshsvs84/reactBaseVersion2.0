const initialState = {
    id: "",
    name: "",
    roles:[],
    attractions: [],
    sources: [],
    category: [],
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'CUSTOMER_SUCCESS':
            state = {
                ...state,
                id: action.payload.id,
                name: action.payload.name
            };
            return state;
        case 'CUSTOMER_ERROR':
            state = {
                ...state,
                error: action.payload
            };
            return state;
        case 'ATTRACTION_SUCCESS':           
            state = {
                ...state,
                id:  action.payload.id,
                name: action.payload.name,
                roles : action.payload.roles,
                attractions: action.payload.attractions
            };
            return state;
        case 'ATTRACTION_ERROR':
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

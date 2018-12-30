const initialState = {  
    Frequency: "",
    selectedDates: {
        StartDate: "",
        EndDate: ""
    },
    SelectedWeeks: [],
    SelectedMonths: [],
    SelectedQuarters: [],
    SelectedYear: [],
    SelectedDimensions: [
        {
            type: "",
            values: []
        }
    ],
    data: {},
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_SUCCESS':
            state = {
                ...state,
                data: action.payload
            };
            return state;
        case 'FILTER_ERROR':
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

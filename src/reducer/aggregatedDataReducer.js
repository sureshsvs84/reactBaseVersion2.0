const initialState = {    
    overAllTatvamRating: 0,
    overAllUserRating: 0,
    volumeofReviews: 0,
    volumeofReviewers: 0,
    npsScore: {
        promoters: {
            count: 0,
            percentage: 0
        },
        passives: {
            count: 0,
            percentage: 0
        },
        detractors: {
            count: 0,
            percentage: 0
        }
    },
    data: {},
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'AGGREGATED_DATA_SUCCESS':
            state = {
                ...state,
                data: action.payload
            };
            return state;
        case 'AGGREGATED_DATA_ERROR':
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

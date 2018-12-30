import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetDimensionsSuccess: (payload) => {
        return {
            type: 'DIMENSION_SUCCESS',
            payload: payload
        };
    },
    GetDimensionsError: (payload) => {
        return {
            type: 'DIMENSION_SUCCESS',
            payload: payload
        };
    }
};

export const fetchDimensions = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(actions.GetDimensionsSuccess({}));
};


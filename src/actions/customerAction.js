import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetCustomerSuccess: (payload) => {
        return {
            type: 'CUSTOMER_SUCCESS',
            payload: payload
        };
    },
    GetCustomerError: (payload) => {
        return {
            type: 'CUSTOMER_ERROR',
            payload: payload
        };
    }
};

export const fetchCustomer = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(actions.GetCustomerSuccess({}));
    // Check the store for customer if it's not empty then return the store data to the caller.
    
    // Else call the fetchAttractionList() action method to get the customers    
};


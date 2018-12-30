import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetUserInfoSuccess: (payload) => {
        return {
            type: 'USER_INFO_SUCCESS',
            payload: payload
        };
    },
    GetUserInfoError: (payload) => {
        return {
            type: 'USER_INFO_ERROR',
            payload: payload
        };
    }
};

export const fetchUser = () => async (dispatch, getState) => {
    const state = getState();
    // Check store userDetails is not empty then return the store data to the caller.    

    if (!Object.keys(state.tatvamStore.user.data).length === 0) {
        return dispatch(actions.GetUserInfoError({ message: 'User is not authenticated' }));
    }

    //	Else call the API to get the user details by passing the below details

    // Email ID will be always fetched and populated after the successful login.
    let data = [{ "_id": "5bfeab933e720a17d46323d4", "account_code": 1, "user_name": "nithyarani.m@smnetserv.com", "auth_type": "FORM", "email_id": "nithyarani.m@smnetserv.com", "first_name": "Nithya", "last_name": "Rani", "display_name": "Nithya Raniiii", "status": "Active", "created_date": "26/11/2018 12:54:42", "updated_date": "26/11/2018 12:54:42", "created_by": "Super Admin", "updated_by": "Super Admin", "updated_count": "0" }];
    dispatch(actions.GetUserInfoSuccess(data[0]));

};


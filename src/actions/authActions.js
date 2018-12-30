import { accountCode, RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

import Api from 'baseServiceApi';

const actions = {
    Success: (payload) => {
        return {
            type: 'LOGIN_SUCCESS',
            payload: payload
        };
    },
    Error: (payload) => {
        return {
            type: 'LOGIN_ERROR',
            payload: payload
        };
    },
    ForgotPasswordSuccess: (payload) => {
        return {
            type: 'FORGOT_PASSWORD_SUCCESS',
            payload: payload
        };
    },
    ForgotPasswordError: (payload) => {
        return {
            type: 'FORGOT_PASSWORD_ERROR',
            payload: payload
        };
    },
    ResetPasswordSuccess: (payload) => {
        return {
            type: 'RESET_PASSWORD_SUCCESS',
            payload: payload
        };
    },
    ResetPasswordError: (payload) => {
        return {
            type: 'RESET_PASSWORD_ERROR',
            payload: payload
        };
    }
};

export const login = (username, password) => async (dispatch, getState) => {
    if (username === "admin" && password === "admin") {
        dispatch(actions.Success([
            {
                "_id": "5bfeab1e3e720a17d463175c",
                "user_name": "nithyarani.m@smnetserv.com",
                "password": "netserv@123",
                "reset_password": "575uAQwoWyOQ/d1rEHxpcvsz1UTKhFw=",
                "reset_password_validity": "",
                "status": "Active",
                "created_date": "26/11/2018 12:55:03",
                "updated_date": "26/11/2018 12:55:03",
                "created_by": "Super Admin",
                "updated_by": "Super Admin",
                "updated_count": "0"
            }]
        ));
    } else {
        dispatch(actions.Error({ message: "Invalid User Name/Password" }));
    }
};

export const forgotPassword = () => async (dispatch, getState) => {

}

export const resetPassword = (inputObj) => async (dispatch, getState) => {

}
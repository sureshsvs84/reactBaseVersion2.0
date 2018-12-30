import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetSystemConfigSuccess: (payload) => {
        return {
            type: 'SYSTEM_CONFIGURATION_SUCCESS',
            payload: payload
        };
    },
    GetSystemConfigError: (payload) => {
        return {
            type: 'SYSTEM_CONFIGURATION_ERROR',
            payload: payload
        };
    }
};

export const fetchSystemConfiguration = () => async (dispatch, getState) => {
    const state = getState();
    // Check the store for systemConfigurations if it's not empty then return the store data to the caller.    
    if (!Object.keys(state.tatvamStore.systemConfiguration.data).length === 0) {
        return dispatch(actions.GetSystemConfigSuccess(state.tatvamStore.systemConfiguration.data));
    }
    var data = [{ "_id": "5bfe3b7f6e05c52510895453", "customer_code": "0", "config_key": "Build", "config_value": "5000" }, { "_id": "5bfe3b7f6e05c52510895454", "customer_code": "0", "config_key": "BuildDate", "config_value": "13-Nov-2018" }, { "_id": "5bfe3b7f6e05c52510895455", "customer_code": "0", "config_key": "LastUpdate", "config_value": "13-Nov-2018" }, { "_id": "5bfe3b7f6e05c52510895456", "customer_code": "0", "config_key": "PasswordValidity", "config_value": "1" }, { "_id": "5bfe3b7f6e05c52510895457", "customer_code": "0", "config_key": "Version", "config_value": "2.5" }];
    // Else call the API to get the systemConfigurations            
    let item = {};
    for (const param of data) {
        let key = param.config_key
        let value = param.config_value;
        item[key] = value;
    }
    // Populate the returned value to the store with systemConfigurations
    dispatch(actions.GetSystemConfigSuccess({ item }));

    // Check the store for systemConfigurations if it's not empty then return the store data to the caller.

    // Else call the API to get the systemConfigurations            

    // Populate the returned value to the store with systemConfigurations
};


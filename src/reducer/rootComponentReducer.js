import { combineReducers } from 'redux';
import { loadingBarReducer } from '../applicationComponents/layout/loader/loadingBarReducer';
import auth from './authReducer';
import user from './userReducer';
import customer from './customerReducer';
import notification from './notificationReducer';
import quickPeriodicity from './periodicityReducer';
import dimension from './dimensionReducer';
import filter from './filterReducer';
import aggregatedData from './aggregatedDataReducer';
import userCustomerPermission from './userCustomerPermissionReducer';
import systemConfiguration from './systemConfigurationReducer';
import reportDataReducer from './reportDataReducer';

export default combineReducers({   
    auth,
    user,
    customer,
    notification,
    quickPeriodicity,
    dimension,
    filter,
    aggregatedData,
    userCustomerPermission,
    systemConfiguration,
    loadingBar: loadingBarReducer,
    reportDataReducer
});

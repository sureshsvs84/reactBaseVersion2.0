import Api from 'baseServiceApi';
import { accountCode, RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetUserCustomerPermissionSuccess: (payload) => {
        return {
            type: 'USER_PERMISSION_SUCCESS',
            payload: payload
        };
    },
    GetUserCustomerPermissionError: (payload) => {
        return {
            type: 'USER_PERMISSION_ERROR',
            payload: payload
        };
    }
};

function popChild(param, reports) {
    reports.forEach(element => {
        if (param.menuId === element.reports.parent_report_id) {
            // param.sub.push(element.reports);
            // element.sub = []; 
            // popChild(element, reports);

            let obj = new Object();
            obj.menuId=element.reports.report_id;
            obj.menuTitle=element.reports.report_name;
            obj.menuIcon=element.reports.report_icon;
            obj.toolTipText="";

            obj.pageData="";
            obj.pageID=0;
            obj.pageTitle= "";

            // To remove
            obj.parent_report_id=element.reports.parent_report_id;
            param.sub.push(obj);                
            // param.sub = [];
            obj.sub=[];
            popChild(obj, reports);
        }
    });  
    // console.log('param='+JSON.stringify(param)); 
};

export const fetchUserCustomerPermissions = () => async (dispatch, getState) => {
    const state = getState();
    
    // Check the store for menus if it's not empty then return the store data to the caller.
    
    // if (state.tatvamStore.menus.length > 1) {
    //     return dispatch(actions.GetUserCustomerPermissionSuccess(state.tatvamStore.menus));
    // }
    // Else call the API to get the menus list by passing the below details    
            //	Role Name (Get directly accessing the customer store values)  
    
    //TODO: Need to send multiple roles and get the permission details
    const payload = [{ "RoleName": state.tatvamStore.customer.roles[0].role_name  }];
    const requestPayload = new RequestPayload('', apiConfig.READ_PERMISSION, payload);
    return Api.processApiCall(requestPayload).then((result) => {        
         if (result.code === 200) {
            
            // let menusList = [];
            // let page_components =[];
            // result.data.forEach(param => {
            //     if (param.reports.parent_report_id == 0) {
            //         let obj = new Object();
            //         obj.menuId=param.reports.report_id;
            //         obj.menuTitle=param.reports.report_name;
            //         obj.menuIcon=param.reports.report_icon;
            //         obj.toolTipText="";

            //         obj.pageData="";
            //         obj.pageID=0;
            //         obj.pageTitle= "";



            //         let pageObj = new Object();
            //         pageObj.ComponentId= 0;
            //         pageObj.RowNumber= 0;
            //         pageObj.ColumnNumber= 0;
            //         pageObj.ComponentClass= "";
            //         pageObj.Title= "";
            //         pageObj.Type= "";
            //         pageObj.MinWidth= "";
            //         pageObj.MaxWidth= "";
            //         pageObj.MinHeight= "";
            //         pageObj.MaxHeight= "";


            //         obj.pageComponents = [];
            //         obj.pageComponents.push(pageObj);
            //         menusList.push(obj)                    
            //         // param.sub = [];
            //         obj.sub=[];
            //         popChild(obj, result.data);
            //     } else{
            //         page_components.push(param.reports);
            //     }
            // });

            // console.log('menusList='+ JSON.stringify( menusList)) 
            dispatch(actions.GetUserCustomerPermissionSuccess(result.data));            
        }
        else {
            dispatch(actions.GetUserCustomerPermissionError({ message: result.messages }));
        }
    }).catch(error => {
        dispatch(actions.GetUserCustomerPermissionError({ message: error.messages }));
    });
    // 	Check store for reportId, if not empty then return the store data to the caller.
    //	Else call the API to get the ChartData by using the Request Format
    //	Populate the returned value to the store with reportId  
};


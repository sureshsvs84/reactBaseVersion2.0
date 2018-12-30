import Api from 'baseServiceApi';
import { accountCode, RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

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
    },
    GetAttractionsSuccess: (payload) => {
        return {
            type: 'ATTRACTION_SUCCESS',
            payload: payload
        };
    },
    GetAttractionsError: (payload) => {
        return {
            type: 'ATTRACTION_ERROR',
            payload: payload
        };
    }
};

export const fetchAttractions = () => async (dispatch, getState) => {
    const state = getState();
    // Check the store for attractions if it's not empty then return the store data to the caller.
    if (state.tatvamStore.customer.attractions.length === 1) {
        return dispatch(actions.GetAttractionsSuccess(state.tatvamStore.customer.attractions));
    }
    let data = [{"_id":"5bfeab933e720a17d46323d4","users":{"_id":"5bfeab933e720a17d46323d4","account_code":1,"user_name":"nithyarani.m@smnetserv.com","auth_type":"FORM","email_id":"nithyarani.m@smnetserv.com","first_name":"Nithya","last_name":"Rani","display_name":"Nithya Raniiii","status":"Active","created_date":"26/11/2018 12:54:42","updated_date":"26/11/2018 12:54:42","created_by":"Super Admin","updated_by":"Super Admin","updated_count":"0","customers":{"_id":"5bfeaafc3e720a17d4631675","account_code":1,"customer_code":"10003","customer_name":"Legoland Florida Resort","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}}},"customers":[{"_id":"5bfeaafc3e720a17d4631675","account_code":1,"customer_code":"10003","customer_name":"Legoland Florida Resort","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631676","account_code":1,"customer_code":"10006","customer_name":"Dollywoods DreamMore Resort","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631678","account_code":1,"customer_code":"1002","customer_name":"Georgia Aquarium","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d463167c","account_code":1,"customer_code":"1009","customer_name":"Shedd Aquarium","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d463167d","account_code":1,"customer_code":"1017","customer_name":"The Florida Aquarium","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631680","account_code":1,"customer_code":"1085","customer_name":"Marineland Dolphin Adventures","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631683","account_code":1,"customer_code":"3005","customer_name":"Colorado Mesa University","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631684","account_code":1,"customer_code":"8001","customer_name":"Jacksonville Zoo","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631687","account_code":1,"customer_code":"8055","customer_name":"Greensboro Science Center","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631688","account_code":1,"customer_code":"8063","customer_name":"The Field Museum of Natural History","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631690","account_code":1,"customer_code":"8240","customer_name":"Dollywood Theme Park","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631693","account_code":1,"customer_code":"8244","customer_name":"Dollywoods Splash Country","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631694","account_code":1,"customer_code":"8250","customer_name":"Denver Museum Of Nature And Science","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631695","account_code":1,"customer_code":"8261","customer_name":"National Basketball Association","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}},{"_id":"5bfeaafc3e720a17d4631696","account_code":1,"customer_code":"8265","customer_name":"NBA Survey","status":"Active","roles":{"_id":"5bfeab633e720a17d4631919","account_code":1,"role_name":"Admin","role_description":"Customer Admin"}}]}];
    const userAttractions = data[0];
    let customerId = "", customerName = "", roles = [];
    //	Populate the default attraction value to the customer 
    let lstAttraction = [];
    userAttractions.customers.map((attraction, index) => {
        if (attraction.isDefault !== undefined) {
            customerId = attraction.customer_code;
            customerName = attraction.customer_name;
            roles.push(attraction.roles);
        }

        lstAttraction.push({
            id: attraction.customer_code,
            name: attraction.customer_name,
            roles: [attraction.roles]
        });
    });

    //	If the returned value length is 1  or the default value is not set then populate the value to the customer in the store
    if (userAttractions.length == 1 || customerId === "") {
        customerId = userAttractions.customers[0].customer_code;
        customerName = userAttractions.customers[0].customer_name;
        roles.push(userAttractions.customers[0].roles);
    }

    dispatch(actions.GetAttractionsSuccess({
        id: customerId,
        name: customerName,
        roles: roles,
        attractions: lstAttraction
    }));

};

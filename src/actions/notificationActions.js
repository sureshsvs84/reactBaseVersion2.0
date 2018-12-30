import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetNotificationSuccess: (payload) => {
        return {
            type: 'NOTIFICATION_SUCCESS',
            payload: payload
        };
    },
    GetNotificationError: (payload) => {
        return {
            type: 'NOTIFICATION_ERROR',
            payload: payload
        };
    }
};

export const fetchNotifications = () => async (dispatch, getState) => {
    const state = getState();
    //	Check store notificationList is not empty then return the store data to the caller.
    //	Else call the API to get the notification list by passing the below details
            //	Customer Code (Get directly accessing the customerDetails  store values)
            //	Email ID (Get directly accessing the userDetails  store values)
    const payload = [{
        "UserName": state.tatvamStore.auth.currentUser[0].user_name,
        "CustomerCode": state.tatvamStore.customer.id
    }];
 
    const requestPayload = new RequestPayload('', apiConfig.READ_USERNOTIFICATION, payload);
    return Api.processApiCall(requestPayload).then((result) => {
        if (result.code === 200) {
            const notifications = [];
            for (const param of result.data) {
                notifications.push({
                    messageId: param.message_id,
                    attractionCode: param.customer_code,
                    fromUser: param.from_user,
                    toUser: param.to_user,
                    messageTitle: param.message_title,
                    messageContents: param.message_contents,
                    messageType: param.message_type,
                    status: param.status
                })
            };
            dispatch(actions.GetNotificationSuccess({ notifications }));
        }
        else {
            dispatch(actions.GetNotificationError({ message: result.messages }));
        }
    }).catch(error => {
        dispatch(actions.GetNotificationError({ message: error.messages }));
    });


    //	Populate the returned value to the store with notificationList
    //	Find the count of Un-Read notifications from the returned value accordingly update tatvam store unReadNotificationCount      
};


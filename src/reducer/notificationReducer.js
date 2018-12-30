const initialState = {
    readCount: 0,
    unreadCount: 0,
    archiveCount: 0,
    notifications: [
        {
            messageId: 0,
            attractionCode: "",
            fromUser: "",
            toUser: "",
            messageTitle: "",
            messageContents: "",
            messageType: "",
            status: ""
        }
    ],
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIFICATION_SUCCESS':
            let rCount = 0;
            let uCount = 0;
            let aCount = 0;
            for (const notification of action.payload.notifications) {
                if (notification.messageType === 'Read') {
                    rCount = rCount + 1;
                } else if (notification.messageType === 'UnRead') {
                    uCount = uCount + 1;
                } else {
                    aCount = aCount + 1;
                }
            }
            state = {
                ...state,
                readCount: rCount,
                unreadCount: uCount,
                archiveCount: aCount,
                notifications: action.payload.notifications
            };
            return state;
        case 'NOTIFICATION_ERROR':
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

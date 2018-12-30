import { loaderActionTypes } from 'actionTypes';
export const DEFAULT_SCOPE = 'default';

export function loadingBarReducer(state = {}, action = {}) {
    const { scope = loaderActionTypes.DEFAULT } = (action.payload || {});

    switch (action.type) {
    case loaderActionTypes.SHOW:
        return {
            ...state,
            [scope]: (state[scope] || 0) + 1,
            delay: action.payload.delay
        };
    case loaderActionTypes.HIDE:
        return {
            ...state,
            [scope]: Math.max(0, (state[scope] || 1) - 1)
        };
    case loaderActionTypes.RESET:
        return {
            ...state,
            [scope]: 0
        };
    default:
        return state;
    }
}

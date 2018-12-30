
import { loaderActionTypes } from 'actionTypes';

export function showLoading(delay,scope = loaderActionTypes.DEFAULT) {
    return {
        type: loaderActionTypes.SHOW,
        payload: {
            scope,
            delay
        }
    };
}
  
export function hideLoading(scope = loaderActionTypes.DEFAULT) {
    return {
        type: loaderActionTypes.HIDE,
        payload: {
            scope
        }
    };
}
  
export function resetLoading(scope = loaderActionTypes.DEFAULT) {
    return {
        type: loaderActionTypes.RESET,
        payload: {
            scope
        }
    };
}
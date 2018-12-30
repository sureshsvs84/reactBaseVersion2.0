import stringUtil from 'stringUtil';
import { Promise } from 'es6-promise';
import config from 'configuration';
import { httpMethodType, appConstants as constants } from 'appConstants';
import 'es6-promise/auto';


const baseurl = config.server.base_url;
class BaseServiceApi {

    getRequestURL() {
        const servername = this.getServerName();
        const endpoint = config.server.endpoint;
        const parameterString = null;

        if (parameterString)
            return stringUtil.format('{0}{1}?{2}', [servername, endpoint, parameterString]);
        else
            return stringUtil.format('{0}{1}', [servername, endpoint]);
    }

    getServerName() {
        let serverName;
        const details = config.server;
        serverName = stringUtil.format('{0}:{1}', [details.host, details.port]);
        return serverName === null ? serverName = '' : serverName;
    }

    setAuthHeaders(xhr) {
        const accessToken = sessionStorage.getItem(constants.oAuth.ACCESS_TOKEN);
        xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
    }

    //Node api service call
    processApiCall(requestPayload) {
        return new Promise((resolve, reject) => {
            const url = baseurl;
            const method = httpMethodType.POST;
            const payload = requestPayload;
            const async = true;
            const xhr = new XMLHttpRequest();
            xhr.open(method, url, async);
            xhr.withCredentials = false;

            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.onload = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.response);                  
                    if ((response.status === 'OK' || response.status === 'SUCCESS') && response.code === 200) {
                        resolve(response);
                    }
                    else if (response.status === 'NOT_FOUND' || response.code === 404) {
                        reject(response);
                    }
                    else if (response.status === 'INTERNAL_SERVER_ERROR' || response.code === 500
                        || response.status === 'ERROR' || response.code === 999) {
                        reject(response);
                    }
                    else {
                        reject('Invalid Server Response');
                        console.log('Invalid Server Response', response);
                    }

                } else {
                    if (this.status === 401) {
                        const response = xhr.response;
                        if (response.responseHeader) {
                            //log respective message
                        }
                    }
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
                if (this.status === 0) {
                    //"Network connection is not available."
                }
            };

            if (!payload) {
                xhr.send();
            }
            else {
                xhr.send(JSON.stringify(payload));
            }
        });
    }
}

const baseServiceApi = new BaseServiceApi();
export default baseServiceApi;

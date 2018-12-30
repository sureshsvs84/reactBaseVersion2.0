const env = process.env.NODE_ENV; // 'dev'|'test'|'prod'

const dev = {
    server: {
        base_url: process.env.DATA_ABSTRACTION_URL || "http://localhost:10040/v1/tatvamService"
    },
    client: {
        host: process.env.UI_HOST || "0.0.0.0",
        port: process.env.UI_PORT || "8088",
        endpoint: process.env.UI_END_POINT || "tatvam-web",
    },   
    dateformat: {
        DOBFormat: "DD/MM/YYYY"
    },
    auth:{
        authUri: process.env.UI_END_POINT || "tatvam-web",
        logout : 'login',
        USER_NAME: ''
    }
};


const prod = {
    server: {
        base_url: '{{getenv "DATA_ABSTRACTION_URL"}}'
    },
    client: {
        host: '{{getenv "UI_HOST"}}',
        port: '{{getenv "UI_PORT"}}',
        endpoint: '{{getenv "UI_END_POINT"}}',
    },
    dateformat: {
        DOBFormat: "DD/MM/YYYY"
    },
    auth:{
        authUri: process.env.AUTH_URI || "login",
    }   
};

const config = {
    dev,
    prod
};
module.exports = config[env];

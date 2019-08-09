import defaultConfig from './defaults';

let envConfig;
const env = process.env.NODE_ENV || 'development';
if(env === 'development') {
    envConfig = require('./development')['default'];
} else if (env === 'production') {
    envConfig = require('./production')['default'];
}

export default {
    ...envConfig,
    ...defaultConfig,
}
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { globalRouter } from './routes';

export default (function() {
    let server = express(),
        create,
        start;
    
    create = function(config) {

        // Server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        
        server.use(function(req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            next();
        });
        
        // Returns middleware that parses json
        server.use(bodyParser.json());
        server.use(cookieParser());
        server.use('/api', globalRouter);
        
    };

    start = function() {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
})();
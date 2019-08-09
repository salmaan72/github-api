import server from './src/server';
import config from './config';
import dotenv from 'dotenv';

dotenv.config();

server.create(config);
server.start();
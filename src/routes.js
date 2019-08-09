import express from 'express';
import { sampleRouter } from './app/sample/routes';
import { githubRouter } from './app/github/routes';

const router = express.Router();

router.route('*').get(function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
});

router.use('/sample', sampleRouter);

router.use('/github', githubRouter);

export { router as globalRouter };

import express from 'express';
import controller from './controller';
const router = express.Router();

router.route('/repos').get(controller.userRepos);

export { router as githubRouter }
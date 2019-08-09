import express from 'express';
import controller from './controller';
const router = express.Router();

router.route('/').get(controller.sampleFunc);

export { router as sampleRouter };
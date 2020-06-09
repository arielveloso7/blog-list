import Router from 'express';
import list from '../controller/blog/list.js';
import create from '../controller/blog/create.js';

const router = Router();

router.route('/')
    .get(list)
    .post(create);

export default router;
import { Router } from 'express'
const router = Router();

import { getUsers, createUsers } from "../controllers/user.controller";

router.get('/users', getUsers);
router.post('/users', createUsers);
// router.get('/users/:id', );
// router.put('/users', );
// router.delete('/users/:id', );


export default router;
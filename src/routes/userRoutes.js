import { Router } from "express";
import { addUser, createUserPost, delUser, findAllUsers, getUserByEmail, updatUser } from "../controllers/UserController.js";

const router = Router();

router.post('/users', addUser);
router.get('/users', findAllUsers);

router.get('/users', getUserByEmail);
router.get('/users', updatUser);
router.get('/users', delUser);

router.post('/users/post', createUserPost);

export default router;
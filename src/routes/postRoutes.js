import { Router } from "express";
import { addPost, delPost, findAllPosts, getPostById, updatPost } from "../controllers/PostController";


const router = Router();

router.post('/posts', addPost);
router.get('/posts', findAllPosts);

router.get('/posts', getPostById);
router.get('/posts', updatPost);
router.get('/posts', delPost);

export default router;
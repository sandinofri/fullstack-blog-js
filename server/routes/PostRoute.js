import express from "express"
import { getAllPosts, createPost,getPostsByCategory,getPostsByAuthor } from '../controllers/PostController.js';

const router = express.Router()

router.get('/', getAllPosts);
router.post('/', createPost);
router.get('/category/:categoryId', getPostsByCategory);
router.get('/author/:authorId', getPostsByAuthor);


export default router
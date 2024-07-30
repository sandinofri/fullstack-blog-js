import express from "express"
import {getAllAuthors,createAuthor} from "../controllers/AuthorController.js"

 const router = express.Router()

router.get('/',getAllAuthors);
router.post('/', createAuthor);

export default router
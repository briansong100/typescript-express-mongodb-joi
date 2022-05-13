import express from 'express';
import authorController from '../controllers/Author';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();
router.post('/create', ValidateSchema(Schemas.author.create), authorController.createAuthor);
// router.post('/create', rd /s /q authorController.createAuthor);
router.get('/get/:authorId', authorController.readAuthor);
router.get('/get/', authorController.readAllAuthor);
router.patch('/update/:authorId', ValidateSchema(Schemas.author.update), authorController.updateAuthor);
router.delete('/delete/:authorId', authorController.deleteAuthor);

export = router;

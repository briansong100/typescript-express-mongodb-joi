import express from 'express';
import bookController from '../controllers/Book';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();
router.post('/create', ValidateSchema(Schemas.book.create), bookController.createBook);
router.get('/get/:bookId', bookController.readBook);
router.get('/get/', bookController.readAllBook);
router.patch('/update/:bookId', ValidateSchema(Schemas.book.update), bookController.updateBook);
router.delete('/delete/:bookId', bookController.deleteBook);

export = router;

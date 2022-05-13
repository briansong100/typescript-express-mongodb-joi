import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Book from '../models/Book';

const createBook = (req: Request, res: Response) => {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author
  });

  return book
    .save()
    .then((book) => res.status(201).json({ book }))
    .catch((error) => res.status(500).json({ error }));
};

const readBook = (req: Request, res: Response) => {
  const bookId = req.params.bookId;

  return Book.findById(bookId)
    .populate('author') // for ref id of author... look like "foreign key"
    .select('-__v') // hide __v field
    .then((book) => (book ? res.status(200).json({ book }) : res.status(404).json({ message: 'Not Found' })))
    .catch((error) => res.status(500).json({ error }));
};

const readAllBook = (req: Request, res: Response) => {
  return Book.find()
    .populate('author')
    .select('-__v')
    .then((books) => res.status(200).json({ books }))
    .catch((error) => res.status(500).json({ error }));
};

const updateBook = (req: Request, res: Response) => {
  const bookId = req.params.bookId;

  return Book.findById(bookId)
    .then((book) => {
      if (book) {
        book.set(req.body);
        book
          .save()
          .then((book) => res.status(201).json({ book }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteBook = (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  return Book.findByIdAndDelete(bookId)
    .then((book) => (book ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
    .catch((error) => res.status(500).json({ error }));
};

export default { createBook, updateBook, deleteBook, readBook, readAllBook };

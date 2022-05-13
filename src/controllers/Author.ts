import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Author from '../models/Author';

const createAuthor = (req: Request, res: Response) => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });

  return author
    .save()
    .then((author) => res.status(201).json({ author }))
    .catch((error) => res.status(500).json({ error }));
};

const readAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;

  return Author.findById(authorId)
    .then((author) => (author ? res.status(200).json({ author }) : res.status(404).json({ message: 'Not Found' })))
    .catch((error) => res.status(500).json({ error }));
};

const readAllAuthor = (req: Request, res: Response) => {
  return Author.find()
    .then((authors) => res.status(200).json({ authors }))
    .catch((error) => res.status(500).json({ error }));
};

const updateAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;
  console.log(authorId);
  return Author.findById(authorId)
    .then((author) => {
      if (author) {
        author.set(req.body);
        author
          .save()
          .then((author) => res.status(201).json({ author }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;
  return Author.findByIdAndDelete(authorId)
    .then((author) => (author ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
    .catch((error) => res.status(500).json({ error }));
};

export default { createAuthor, updateAuthor, deleteAuthor, readAuthor, readAllAuthor };

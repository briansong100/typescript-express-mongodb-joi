"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Book_1 = __importDefault(require("../models/Book"));
const createBook = (req, res) => {
    const book = new Book_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author
    });
    return book
        .save()
        .then((book) => res.status(201).json({ book }))
        .catch((error) => res.status(500).json({ error }));
};
const readBook = (req, res) => {
    const bookId = req.params.bookId;
    return Book_1.default.findById(bookId)
        .populate('author') // for ref id of author... look like "foreign key"
        .select('-__v') // hide __v field
        .then((book) => (book ? res.status(200).json({ book }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllBook = (req, res) => {
    return Book_1.default.find()
        .populate('author')
        .select('-__v')
        .then((books) => res.status(200).json({ books }))
        .catch((error) => res.status(500).json({ error }));
};
const updateBook = (req, res) => {
    const bookId = req.params.bookId;
    return Book_1.default.findById(bookId)
        .then((book) => {
        if (book) {
            book.set(req.body);
            book
                .save()
                .then((book) => res.status(201).json({ book }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not Found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteBook = (req, res) => {
    const bookId = req.params.bookId;
    return Book_1.default.findByIdAndDelete(bookId)
        .then((book) => (book ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createBook, updateBook, deleteBook, readBook, readAllBook };

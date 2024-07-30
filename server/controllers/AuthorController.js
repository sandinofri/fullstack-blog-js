import Author from "../models/Author.js"

// Get all authors
export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new author
export const createAuthor = async (req, res) => {
    const author = new Author({
        name: req.body.name,
        bio: req.body.bio,
    });

    try {
        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

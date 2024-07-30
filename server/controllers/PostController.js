import Post from "../models/Post.js"

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author category');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new post
export const createPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        category: req.body.category,
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a single post


// Get posts by category
export const getPostsByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId; // Ambil ID kategori dari parameter URL
        const posts = await Post.find({ category: categoryId }).populate('author category');

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for this category' });
        }

        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



// Get posts by author
export const getPostsByAuthor = async (req, res) => {
    try {
        const authorId = req.params.authorId; // Ambil ID penulis dari parameter URL
        const posts = await Post.find({ author: authorId }).populate('author category');

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for this author' });
        }

        res.json(posts); // Kirimkan postingan yang ditemukan
    } catch (error) {
        res.status(500).json({ message: error.message }); // Tangani error dengan benar
    }
};

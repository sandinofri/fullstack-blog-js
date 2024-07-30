import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import PostRoute from "./routes/PostRoute.js"
import AuthorRoute from "./routes/AuthorRoute.js"
import CategoryRoute from "./routes/CategoryRoute.js"
const app = express()


app.use(express.json())
app.use(cors())
app.use('/posts', PostRoute);
app.use('/authors', AuthorRoute); // Tambahkan jika Anda memiliki rute author
app.use('/categories', CategoryRoute); // Tambahkan jika Anda memiliki rute category
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));
    app.listen(5000, ()=>console.log("running.."))
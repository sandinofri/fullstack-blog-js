import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import NavbarComponent from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [penulis, setPenulis] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAuthor();
    getCategory();
  }, []);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const getAuthor = async () => {
    try {
      const response = await axios.get('http://localhost:5000/authors');
      console.log(response.data);
      setPenulis(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      console.log(response.data);
      setKategori(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      content,
      author,
      category,
    };
    console.log(body);
    try {
      const response = await axios.post('http://localhost:5000/posts', body);
      console.log(response);
      navigate('/blog');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1 className="mt-3 mb-3">Add new blog</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={handleTitleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              onChange={handleContentChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Select
              name="author"
              value={author}
              onChange={handleAuthorChange}
              required
            >
              <option value="" disabled>
                Select author
              </option>
              {penulis.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {kategori.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <button className="btn btn-primary mt-3" type="submit">
            Save
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Add;

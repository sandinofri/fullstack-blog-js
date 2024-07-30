import React, { useEffect, useState } from 'react'
import NavbarComponent from './Navbar'
import axios from "axios"
import { Link } from 'react-router-dom'

const Blog = () => {
    const[blog,setBlog]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        const response = await axios.get("http://localhost:5000/posts")
        console.log(response.data)
        setBlog(response.data)
    }
  return (
    <div>
        <NavbarComponent/>
        <div className="container">
            <Link to={"/add"} className='btn btn-primary'>Add new blog</Link>
            <h1>ini adalah halaman blog</h1>
            {blog.slice(1).map((item)=>(
                <>
                <h5>{item.title}</h5>
                author : <a href='#' className='me-2 text-decoration-none'>{item.author.name}</a>
                category : <a href='#' className='me-2 text-decoration-none'>{item.category.name}</a>
                <p>{item.content}</p>
                </>
                
            ))}
        </div>
    </div>
  )
}

export default Blog

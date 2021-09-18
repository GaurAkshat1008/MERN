import React, { useState } from 'react'
import './Chats.css'

function Chats() {
    const [blogs, setBlogs] = useState([
        {
            title:'Title', 
            author:'Author',
            date:'Date',
            blog:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis culpa ad eveniet nam tenetur vel, accusamus alias necessitatibus ipsum rem molestias! Tenetur libero culpa rerum adipisci distinctio consequuntur quia '
        },
    ]);
    return (
        <div className="new">
            {blogs.map(blog => (
            <div className="chats">
                <div className="chats__container">
                    <div className="chats__header">
                    <h1 className="header__title">{blog.title}</h1>
                    <h4 className="header__author">{blog.author}</h4>
                    <h4 className="header__date">{blog.date}</h4>
                    </div>
                    <div className="chats__blog">
                    <h3>{blog.blog}</h3>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Chats

import React from 'react'
import {Link} from "react-router-dom"
import"./post.css"
export default function Post({post}) {
    return (
        <div className="post">
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c)=>(
                        <span>{c.name}</span>))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className ="postTitle">{post.username}</span>
                </Link>
                <hr/>
                <span className ="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className ="postDesc">{post.desc}</p>
        </div>
    )
}

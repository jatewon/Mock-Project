import React, { useState,useEffect } from 'react'
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Posts'
import PopularTags from "../../components/Populartag/PopularTag"
import axios from "axios";
import { useLocation } from "react-router";
import "./homepage.css"
export default function Homepage() {
    const [posts ,setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
         <Header/>   
         <div className="home">
           <div className="homeItem1">
                    <Posts posts={posts} />
           </div>
                <div className="homeItem2">
                    <PopularTags/>
                </div>
         </div>
        </>
    )
}

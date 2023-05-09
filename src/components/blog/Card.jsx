import React from "react"
import "./blog.css"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineAlert } from "react-icons/ai"
import { Link } from "react-router-dom"

import { useState } from "react"
import { useEffect } from "react"
import Button from "../button/Button"

export const Card = () => {
//  storing the posts
 const [posts, setPosts] = useState([]);
//  const [fetching, isFetching] = useState("");

 useEffect(() => {
  async function blogs() {
    const res = await fetch(
      `https://blog.shbootcamp.com.ng/all_post.php`
    );
    const data = await res.json();
    const blog = data.message.all_post;
    console.log(blog);
    console.log(blog.blog_picture)
    setPosts(blog);
  }
  blogs();
}, [setPosts]);
 
 
 
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {posts.map((item) => (
            <div className='box boxItems' key={item.post_id}>
              <div className='img'>
              <img
                            className="w-full max-h-[400px] object-cover border-[20px] border-purple-400"
                            src={item.blog_picture ? `https://blog.shbootcamp.com.ng/${item.blog_picture}` : "Picture"}
                            alt=""
                          />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.tags}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.blog_title}</h3>
                </Link>
                
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>{item.likes}</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                  <AiOutlineAlert className="icon"/><label htmlFor="">{item.date_publish}</label>
                </div>

                <Link to={`/blog${item.post_id}`}>
                          <h1 className="flex text-5xl">{item.blog_title}</h1>
                        </Link>
                        <Button
                          link={`/blog/${item.post_id}`}
                          primary={true}
                          text="Read More"
                        />

                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

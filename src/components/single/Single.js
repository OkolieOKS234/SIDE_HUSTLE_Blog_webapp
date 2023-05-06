import React, {useState} from 'react'
import { useEffect } from 'react';

export const Single = () => {
const [posts, setPosts] = useState([]);
const [fetching, isFetching] = useState("")

useEffect(()=>{
    async function blogs(){
        const res = await fetch(`https://blog.shbootcamp.com.ng/fetch_post.php`);
    
const data = await res.json();
const blog = data.fetch_post
setPosts(blog);
}
blogs();
}, [setPosts])


  return (
    <div>
 {posts.map((post) => (
            <div className='box boxItems' key={post.id}>
              <div className='img'>
                <img src={post.blog_picture} alt='' />
              </div>
              <div>
                <p>{post.blog_title}</p>
              </div>

            </div>
          ))}




    </div>
  )
}


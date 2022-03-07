//rafce yaz
import React from 'react'
import Post from './Post'
// buildin css kullanıyoruz 
const PostList = ({posts}) => {
  return (
    <div>
      { posts.map((post) => (
          <div className="grid" key={post.id}>
           <Post post={post} />
            </div>
        ))}

     
        <style jsx>
          {
            `
            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              max-width: 800px;
            }
            `
          }
        </style>

    </div>
  )
}

export default PostList
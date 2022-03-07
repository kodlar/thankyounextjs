import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

/*method 2*/
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {id: post.id.toString()}
        }
    })

    return {
        paths,
        /*
        paths: [
            {params:{ ... }}
        ],
        */
         /*false 404 sayfasına yönlendiriyor true ise hatayı gösteriyor*/
        fallback :true //or false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await res.json();
    return {
        props: {
          post,
        }
      };  
}

/*method 1*/
/*
export  const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    }
  };  
}
*/
export default PostDetails
import React from 'react'
import {URL} from '../../environment/index'
const VideoDetails = ({video}) => {
  return (
    <div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
    </div>
  )
}

/*method 2*/
export const getStaticPaths = async () => {
    const res = await fetch(`${URL}/api/videos`);
    const videos = await res.json();

    const paths = videos.map(video => {
        return {
            params: {id: video.id.toString()}
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
    const res = await fetch(`${URL}/api/videos/${context.params.id}`);
    const video = await res.json();
    return {
        props: {
          video,
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
export default VideoDetails
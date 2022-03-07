import Head from 'next/head'
import Link from 'next/link'
import {URL} from '../../environment/index'

export default function Videos({videos}) {
  console.log(videos);
  return (
       <>
      <Head>
        <title>My Videos</title>
        <meta name="description" content="My video page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
     {videos.map(video => (
        <Link key={video.id} href={`/videos/${video.id}`}>
          <a>{video.name}</a> 
        </Link>
     ))}<br />
    
   
    
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${URL}/api/videos`);
  const videos = await res.json();
  return {
    props: {
        videos,
    }
  };  
}
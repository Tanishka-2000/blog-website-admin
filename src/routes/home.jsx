import girlImageUrl from '../images/girl2.jpg';
import Card from './card';
import { useLoaderData, Link, redirect } from 'react-router-dom';

export async function loader(){

  const response = await fetch('http://localhost:3000/api/admin/posts',{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  if(response.status === 401) return redirect('/login');
 
  const data = await response.json();
 
  if(!data.posts) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return {posts: data.posts};
}

export default function Posts(){
  const {posts} = useLoaderData();
  return(
    <>
    <div className='hero'>
      <Link to='/posts/new' className="new-post">
          <span className="material-symbols-outlined">edit</span>
      </Link>
      <img className='hero-image' src={girlImageUrl}/>
      <div className='hero-about'>
        <h1>Hi,<br />I am Tanishka Talwar.</h1>
        <p className='light'><i>Welcome to my blog.<br/>I am a self-taught fullstack developer, nature and animal lover, and wishes to travel the world.</i></p>
      </div>
    </div>
    <main>
      <h1 className='cards-heading'>Posts</h1>
      <div className='cards-container'>
        {posts.map(post => <Card post={post} key={post._id}/>)}
      </div>  
    </main>
    </>
  )
}

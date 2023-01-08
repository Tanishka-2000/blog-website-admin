import { Link, useLoaderData} from 'react-router-dom';
import { useState } from 'react';
import imageUrl1 from '../images/image1.jpg';
import Comment from './comments';

export async function loader({ params }){
  console.log('post fetched');
  const response = await fetch(`http://localhost:3000/api/admin/posts/${params.postId}`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  if(response.status === 401) return redirect('/login');
 
  const data = await response.json();
  if(!data.post) throw new Error('No post found with this id');
  return {post: data.post};
}


export default function Post(){

  const [commentShown, setCommentShown] = useState(false);
  const [comments, setComments] = useState([]);
  const {post} = useLoaderData();
  
  const toggleComments = async () => {
    if(commentShown){
      setCommentShown(false);
      return;
    }
    const response = await fetch(`http://localhost:3000/api/posts/${post._id}/comments`);
    const data = await response.json();
    setComments(data.comments);
    setCommentShown(true);
  }

  const deleteComment = async (commentId) => {
    console.log('deletecomment');

    const response = await fetch(`http://localhost:3000/api/admin/comments/${commentId}`,{
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response);
    console.log('deleted');
    setComments(comments.filter(comment => comment._id != commentId));
  }

  console.log('loaded');

  return(
    <div className='post'>
      <h1>{post.title }</h1>
      <div className='postMetaData'>
        <span>{post.category || 'Business'}</span>
        <span className='createdAt light'><i>Posted on: { post.date ? new Date(post.date).toDateString() : 'Fri august 8th 2022'}</i></span>
      </div>
      <img src={post.img || imageUrl1}/>
      <div className='btn-last'>
        <p><i>{post.published ? 'Published' : 'unpublished'}</i></p>
      </div>
      <p className='about'>{post.about}</p>
      <p className='content'>{post.content}</p>
      <div className='btn-last'>
        <Link to={`/posts/${post._id}/update`}>update</Link>
      </div>
      <button className='comment-btn' onClick={toggleComments}>{commentShown ? 'Hide' : 'Load'} Comments</button>
      { commentShown && comments && <Comment comments={comments} deleteComment={deleteComment}/>}
    </div>
  )
}

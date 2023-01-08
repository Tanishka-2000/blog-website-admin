import imageUrl1 from '../images/image1.jpg';
import { Link } from 'react-router-dom';

export default function Card({ post }){
  return(
    <div className='card' key={post._id}>
      <div className='image'><img src={post.img || imageUrl1}/></div>
      <div className='info'>
        <p className='light'><span>Fri august 8th 2022</span> | <span>{post.category}</span></p>
        <h2>{post.title}</h2>
        <p><i>{post.about}</i></p>
        <div className='btn-group'>
          <i><Link to={`/posts/${post._id}/`}>read more</Link></i>
          <p><i>{post.published ? 'Published' : 'unpublished'}</i></p>
        </div>
      </div>
    </div>
  );
}
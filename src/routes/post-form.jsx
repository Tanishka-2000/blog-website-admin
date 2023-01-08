import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";

export async function loader({ params }){
  const response = await fetch(`http://localhost:3000/api/admin/posts/${params.postId}`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  if(response.status === 401) return redirect('/login');
 
  const data = await response.json();
  if(!data.post) throw new Error('No post found with this id');
  return data.post;
}

export async function action({request,  params}){
  const formData = await request.formData();
  const post = Object.fromEntries(formData);

  if(post.publish) post.publish = true;
  else post.publish = false;


  const respone = await fetch(`http://localhost:3000/api/admin/posts/${params.postId ? params.postId : ''}`,{
    method: params.postId ? 'PUT' : 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type' : 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(post)
  });

  const data = await respone.json();
  if(data.code === 400) return data.error;
  
  if(params.postId) return redirect(`/posts/${params.postId}`);
  else return redirect('/');
}

export default function PostForm(){

  const post = useLoaderData();
  const error = useActionData();

  return(
    <Form method='post' className='post-form'>
      <h1>New Post</h1>
      <div>
        <label htmlFor='title'>Title:</label>
        <input id='title' name='title' type='text' required={true} defaultValue={post ? post.title : ''}/>
        {error && <span className='input-error'>{error.title}</span>}
      </div>
      <div>
        <label htmlFor='about'>Introduction:</label>
        <input id='about' name='about' type='text' required={true} defaultValue={post ? post.about : ''}/>
        {error && <span className='input-error'>{error.about}</span>}
      </div>
      <div>
        <label htmlFor='content'>Post:</label>
        <textarea id='content' name='content' rows='5' required={true} defaultValue={post ? post.content : ''}></textarea>
        {error && <span className='input-error'>{error.content}</span>}
      </div>
      <div>
        <label htmlFor='category'>Category:</label>
        <input id='category' name='category' type='text' required={true} defaultValue={post ? post.category : ''}/>
        {error && <span className='input-error'>{error.category}</span>}
      </div>
      <div>
        <label htmlFor='img'>Image Url:</label>
        <input id='img' name='img' type='text' required={true} defaultValue={post ? post.img : ''}/>
        {error && <span className='input-error'>{error.img}</span>}
      </div>
      <div>
        <label htmlFor='publish' className="checkbox-label">
          <input type='checkbox' name='publish' defaultChecked={post ? post.published : false}/>
          Publish
        </label>
      </div>
      <div className='btn-last'>
        <button type='submit'>Post</button>
      </div>
    </Form>
  )
};
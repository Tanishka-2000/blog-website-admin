import { Form, redirect, useActionData, useRouteError } from "react-router-dom";

export async function action({request}){
  const formData = await request.formData();
  const userdata = Object.fromEntries(formData);
  
  const respone = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {'Content-Type' : 'application/json; charset=UTF-8'},
    body: JSON.stringify(userdata)
  });
  const data = await respone.json();
  
  if(!data.token) return data.error;

  localStorage.setItem('token', data.token);
  return redirect('/');
}

export default function LoginForm(){
  const error = useActionData();
  
  return(
    <Form method='post' className="login-form">
      <h1>Log In</h1>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' name='username' type='text' />
        {error && <span className='input-error'>{error.username}</span>}
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' />
        {error && <span className='input-error'>{error.password}</span>}
      </div>
      <button>Log In</button>
    </Form>
  );
}
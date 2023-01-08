import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Root from './routes/root';
import Home, { loader as homeLoader} from './routes/home';
import Post, {loader as postLoader} from './routes/post';
import PostForm, {loader as postFormLoader, action as postFormAction} from './routes/post-form';
// import {action as deleteCommentAction} from './routes/post-form';
import LoginForm, {action as loginAction} from './routes/login-form';
import ErrorPage from './routes/errorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      { index: true,
        element:<Home />,
        loader: homeLoader,     
      },
      {
        path:'/posts/:postId',
        element:<Post />,
        loader: postLoader,
        errorElement: <ErrorPage />,        
      },
      {
        path:'/posts/new',
        element: <PostForm />,
        loader: () => null,
        action: postFormAction
      },
      {
        path:'/posts/:postId/update',
        element: <PostForm />,
        loader: postFormLoader,
        action: postFormAction
      },
      {
        path:'/login',
        element: <LoginForm />,
        action: loginAction
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//children:[
//   {
//     path:'/posts/:postId/comments',
//     element: <Comments />,
//     loader: commentLoader,
//     action: commentAction,
//   }
// ],
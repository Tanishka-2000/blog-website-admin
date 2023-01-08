import { Outlet, Link } from 'react-router-dom';
import Footer from './footer';

export default function Root(){
  console.log('root loaded');
  return(
    <>
      <nav><Link to='/'>Tanishka's Blog</Link></nav>
      <Outlet />
      <Footer />
    </>
  );
};

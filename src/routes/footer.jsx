
export default function Footer (){
  return(
    <footer>
      <div>
        <div className='content'>
          <h1>Contact Me</h1>
        </div> 

        <div className='content'>
          <p className='light'><i>If you have any problem with any content of this page or suggestion for any post you may contact me with which ever way you prefer.</i></p>  
        </div>
      </div>

      <div>
        <div className='cta content'>
          <span className="material-symbols-outlined">mail</span>
          <p className='cta-heading'>email</p>
          <p className='light'>tanishkatalwar18@gmail.com</p>
        </div>

        <div className='cta content'>
          <span className="material-symbols-outlined">smartphone</span>
          <p className='cta-heading'>call</p>
          <p className='light'>1234567890</p>
        </div>
      </div>
       
    </footer>
  );
}
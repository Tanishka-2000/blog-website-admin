  
export default function Comments({comments, deleteComment}){
  console.log('comments loaded');
  return(
    <>
      {comments.length == 0 ? <p>No Comments on this post</p> :
      comments.map(comment => <Comment comment={comment} key={comment._id} deleteComment={deleteComment}/>)
      }
    </>
  );
}

function Comment({comment, deleteComment}){

  const handleSubmit = e => {
    e.preventDefault();
    deleteComment(comment._id);
  }

  return(
    <div className="comment">
      <div className="comment-header">
        <p className="name">
          <span className="material-symbols-outlined">account_circle</span>
          {comment.username}
        </p>
        <form onSubmit={handleSubmit}>
          <button type='submit'>delete</button>
        </form>
      </div>
      <p className='comment-date'><i>{comment.timestamp ? comment.timestamp:'Fri Aug 8th 2022'}</i></p>
      <p>{comment.comment}</p>
      
    </div>
  )
}
// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

import { Link } from 'react-router-dom'

import styles from './CommentCard.module.css'

const CommentCard = ({ comment, dogId, user, handleDeleteComment }) => {
  return ( 
    <article>
      <header className={styles.header}>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/dogs/${dogId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button onClick={()=> handleDeleteComment(dogId, comment._id)}>DELETE</button>
            </>
          }
      </header>
      <p>{comment.text}</p>
      </article>
  )
}

export default CommentCard
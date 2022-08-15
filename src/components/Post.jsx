import { useState } from 'react';
import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';
import styles from './Post.module.css'

 


export function Post( {author, publishedAt, content} ) {
  const [comments, setComments] = useState([
    'Post bacana de mais dezano'
  
  ])

  const [newCommentText, setNewCommentText] = useState('')


  const PublishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'

  }).format(publishedAt) 


  function handleCreateNewComment(){
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText ('')

  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse Campo é Obrigatorio')

  }




  function deleteComment (commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })
    
    setComments(commentsWithoutDeletedOne)

  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>
          <time title='11 de maio has 14:00' dateTime={publishedAt.toISOString()}>
          {PublishedDateFormatted}
          </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if  (line.type == 'link'){
            return <p key={line.content}><a href=''>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe um comentario' 
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>        
          <button type='submit' disabled={newCommentText.length === 0}>
            Publicar
            </button>
      </footer>
      </form>

      <div className={styles.commentList}>
          {comments.map(comment =>{
            return <Comment  key={comment} content={comment} deleteComment={deleteComment}/>
          })}

      </div>

    </article>
  );
}
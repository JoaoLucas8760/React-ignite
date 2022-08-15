import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, deleteComment}) {
    const [likeCount, setLikeCount] = useState(100)
    
    
    
    function handleDeleteComment (){
        deleteComment(content)
    }

    function handleLikeComment (){
        setLikeCount((state) =>{
            return state + 1
        })

    }

    return(
        <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/72713975?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                     <div className={styles.authorAndTime}>
                        <strong>João Lucas</strong>
                        <time title='11 de maio has 14:00' dateTime='2022-05-11 09:44::22'>Há cerca de 1h atrás</time>

                     </div>

                    <button onClick ={handleDeleteComment}title='Deletar Comentário'>
                        <Trash size={24}/>
                    </button>
                    
                    </header> 

                   <p>{content}</p>
                   
                </div>

                <div className={styles.footer}>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </div>

            
            </div>

          
            
            
        </div>
    )
}
import { Trash, HandHeart } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({ comment, onHandleDeleteComment }) {
  const [like, setLike] = useState(0)
  function handleRemoveComment() {
    onHandleDeleteComment(comment)
  }

  function handleLikeComment() {
    setLike((state) => state + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Avatar hasBorder={false} src="https://github.com/jakeliny.png" />

        <div className={styles.comment}>
          <header>
            <div className={styles.profile}>
              <strong>Jakeline Graciele</strong>
              <span>Cerca de 2h</span>
            </div>

            <button onClick={handleRemoveComment} className={styles.button}>
              <Trash />
            </button>
          </header>

          <p>{comment}</p>
        </div>
      </div>

      <footer>
        <button onClick={handleLikeComment}>
          <HandHeart size={20} />
          Aplaudir
          <span>{like}</span>
        </button>
      </footer>
    </div>
  )
}

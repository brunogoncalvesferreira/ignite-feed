import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Avatar } from "./Avatar"
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { useState } from "react"

export function Post({ author, content, publishedAt }) {
  const [changeText, setChangeText] = useState("")
  const [showComment, setShowComment] = useState([])

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChangeText(e) {
    setChangeText(e.target.value)
  }

  function handleAddNewComment() {
    setShowComment([...showComment, changeText])
    setChangeText("")
  }

  function handleDeleteComment(commentID) {
    const actionDeleteComment = showComment.filter(
      (comment) => comment !== commentID
    )
    setShowComment(actionDeleteComment)
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.profile}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return (
              <a href="#" key={line.content}>
                {line.content}
              </a>
            )
          }
        })}
      </div>

      <div className={styles.hasTags}>
        <a href="">#novoprojeto</a>
        <a href="">#nlw</a>
        <a href="">#rocketseat</a>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Deixe seu feedback</label>
        <textarea
          onChange={handleChangeText}
          value={changeText}
          placeholder="Escreva um comentário..."
        ></textarea>

        <footer>
          <button
            onClick={handleAddNewComment}
            disabled={changeText.length === 0}
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>
      {showComment.map((comment) => (
        <Comment
          key={comment}
          comment={comment}
          onHandleDeleteComment={handleDeleteComment}
        />
      ))}
    </div>
  )
}

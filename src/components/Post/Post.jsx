import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' MMMM 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (comment) => {
    event.preventDefault();
    setComments([...comments, comment]);
    setNewCommentText("");
  };

  const handleChangeNewCommentText = () => {
    setNewCommentText(event.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setButtonVisibility(false);
    }, 100);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            alt="Everton Braga's photo profile in the post"
            hasBorder
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => (
          <p key={line.content}>
            {line.type === "paragraph" ? (
              line.content
            ) : (
              <a href="#">{line.content}</a>
            )}
          </p>
        ))}
      </div>

      <form
        onSubmit={() => handleCreateNewComment(newCommentText)}
        className={styles.commentForm}
        aria-label="form"
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleChangeNewCommentText}
          onFocus={() => setButtonVisibility(true)}
          onBlur={handleBlur}
        />

        <footer aria-label="botao-publicar">
          {buttonVisibility ? <button type="submit">Publicar</button> : null}
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  );
}

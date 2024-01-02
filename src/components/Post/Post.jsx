import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [buttonVisibility, setButtonVisibility] = useState(false);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' MMMM 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

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
        <p>{content[0].content}</p>
        <p>{content[1].content}</p>
        <p>
          <a href="#">{content[2].content}</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onFocus={() => setButtonVisibility(true)}
          onBlur={() => setButtonVisibility(false)}
          placeholder="Deixe um comentário"
        />

        <footer aria-label="botao-publicar">
          {buttonVisibility ? <button type="submit">Publicar</button> : null}
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

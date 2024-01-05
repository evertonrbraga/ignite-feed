import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment} aria-label="comment">
      <Avatar
        src="https://www.github.com/evertonrbraga.png"
        alt="Everton Braga's photo profile in the comment"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} aria-label="trash-icon" />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp aria-label="thumbsup-icon" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { useState } from "react";
import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  const [buttonVisibility, setButtonVisibility] = useState(false);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/25904662?v=4"
            alt="imagem-avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Everton Braga</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
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

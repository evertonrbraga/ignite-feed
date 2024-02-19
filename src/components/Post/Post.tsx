import { ChangeEvent, FormEvent, useState } from "react";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import * as util from "../../utils/utils";
import styles from "./Post.module.css";

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [comments, setComments] = useState(["Comentário feríssimo!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = util.publishedDateFormatted(post.publishedAt);

  const publishedDateRelativeToNow = util.publishedDateRelativeToNow(
    post.publishedAt
  );

  const handleCreateNewComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setButtonVisibility(false);
    }, 100);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={post.author.avatarUrl}
            alt="Everton Braga's photo profile in the post"
            hasBorder
          />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => (
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
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
        aria-label="form"
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onFocus={() => setButtonVisibility(true)}
          onBlur={handleBlur}
          required
        />

        <footer aria-label="botao-publicar">
          {buttonVisibility ? (
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          ) : null}
        </footer>
      </form>

      <div className={styles.commentList} aria-label="comment-list">
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};

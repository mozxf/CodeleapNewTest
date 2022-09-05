import { Title } from '../Title/Title';
import styles from './Post.module.scss';

export interface IPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export const Post = ({
  id,
  username,
  created_datetime,
  title,
  content,
}: IPost) => {
  return (
    <div className={styles.postWrapper}>
      <header className={styles.header}>
        <Title className={styles.title}>{title}</Title>
      </header>
      <div className={styles.contentWrapper}>
        <span className={styles.username}>@{username}</span>
        <span className={styles.date}>{created_datetime.toString()}</span>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

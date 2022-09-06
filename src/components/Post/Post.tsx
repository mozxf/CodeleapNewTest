import { Title } from '../Title/Title';
import styles from './Post.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  setEditModalVisible,
  setDeleteModalVisible,
  setIdToDelete,
  setidToEdit,
  setToEditPostData,
} from '@/actions/modalActions';
import { formatDistance } from 'date-fns';

export interface IPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface IPostDTO {
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
  const currentUser = useSelector<RootState>((state) => state.username.value);
  const dispatch = useDispatch();

  function getInterval(creationDate: string): string {
    return formatDistance(new Date(creationDate), new Date(Date.now()), {
      addSuffix: true,
    });
  }

  function handleOpenDelete() {
    dispatch(setIdToDelete(id));
    dispatch(setDeleteModalVisible(true));
  }

  function handleOpenEdit() {
    dispatch(setEditModalVisible(true));
    dispatch(setidToEdit(id));
    dispatch(setToEditPostData({ title, content }));
  }

  return (
    <div className={styles.postWrapper}>
      <header className={styles.header}>
        <Title className={styles.title}>{title}</Title>
        {currentUser == username && (
          <div className={styles.postChangesButtonsWrapper}>
            <img
              src='/src/assets/VectorDelete.svg'
              onClick={handleOpenDelete}
            />
            <img
              onClick={handleOpenEdit}
              src='/src/assets/VectorEdit.svg'
              alt=''
            />
          </div>
        )}
      </header>
      <div className={styles.contentWrapper}>
        <span className={styles.username}>@{username}</span>
        <span className={styles.date}>{getInterval(created_datetime)}</span>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

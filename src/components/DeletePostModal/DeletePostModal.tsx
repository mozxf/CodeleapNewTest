import React, { EventHandler } from 'react';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import styles from './DeletePostModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModalVisible } from '@/actions/modalActions';
import { definePosts, deletePost } from '@/actions/postsActions';
import { AppDispatch, RootState } from '@/redux/store';
import { TDeleteHandler } from '@/redux/reducers/modal';

interface IDeletePostModal {
  open: boolean;
}

export const DeletePostModal = ({ open }: IDeletePostModal) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteHandler = useSelector<RootState>(
    (state) => state.modal.delete
  ) as TDeleteHandler;

  function handleClickCancel(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(setDeleteModalVisible(false));
  }

  async function handleClickDelete() {
    dispatch(setDeleteModalVisible(false));
    await dispatch(deletePost(deleteHandler.post_id));
    await dispatch(definePosts());
  }

  return (
    <section
      onClick={handleClickCancel}
      data-open={open}
      className={styles.background}
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
        className={styles.modal}
      >
        <Title className={styles.title}>
          Are you sure you want to delete this item?
        </Title>
        <div className={styles.buttonWrapper}>
          <Button onClick={handleClickCancel} className={styles.button}>
            Cancel
          </Button>
          <Button onClick={handleClickDelete} className={styles.button}>
            Ok
          </Button>
        </div>
      </div>
    </section>
  );
};

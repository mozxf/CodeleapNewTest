import styles from './EditPostModal.module.scss';

import React, { useEffect, useState } from 'react';
import { CreatePostForm } from '../CreatePostForm/CreatePostForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { TEditHandler } from '@/redux/reducers/modal';
import { setEditModalVisible } from '@/actions/modalActions';
import { definePosts, editPost } from '@/actions/postsActions';
import { TUsername } from '@/redux/reducers/username';

type THandleModal = {
  open: boolean;
};

export const EditPostModal = ({ open }: THandleModal) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { post_data, post_id } = useSelector<RootState>(
    (state) => state.modal.edit
  ) as TEditHandler;
  const username = useSelector<RootState>(
    (state) => state.username
  ) as TUsername;

  useEffect(() => {
    setTitle(post_data.title);
    setContent(post_data.content);
  }, [post_data]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setEditModalVisible(false));
    await dispatch(
      editPost({
        id: post_id,
        body: { title, content },
      })
    );
    await dispatch(definePosts());
  }

  function handleCloseModal() {
    dispatch(setEditModalVisible(false));
  }

  return (
    <section
      data-open={open}
      onClick={handleCloseModal}
      className={styles.background}
    >
      <CreatePostForm
        className={styles.editPostForm}
        buttonMessage='save'
        componentTitle='Edit item'
        handleInputs={{ title, setTitle, content, setContent }}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

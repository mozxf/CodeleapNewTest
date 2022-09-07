import { Title } from '@/components/Title/Title';
import { GetPosts } from '@/components/GetPosts/GetPosts';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { createPost, definePosts } from '@/actions/postsActions';
import { DeletePostModal } from '@/components/DeletePostModal/DeletePostModal';
import { TDeleteHandler, TEditHandler } from '@/redux/reducers/modal';
import { EditPostModal } from '@/components/EditPostModal/EditPostModal';
import { TUsername } from '@/redux/reducers/username';
import styles from './Main.module.scss';

export const Main = () => {
  const username = useSelector<RootState>(
    (state) => state.username
  ) as TUsername;
  const deleteHandler = useSelector<RootState>(
    (state) => state.modal.delete
  ) as TDeleteHandler;
  const editHandler = useSelector<RootState>(
    (state) => state.modal.edit
  ) as TEditHandler;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (!username) {
      navigate('/signup');
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await dispatch(createPost({ username: username.value, title, content }));
    await dispatch(definePosts());
    setTitle('');
    setContent('');
  }

  return (
    <section className={styles.background}>
      <DeletePostModal open={deleteHandler.open} />
      <EditPostModal open={editHandler.open} />
      <section className={styles.content}>
        <header className={styles.header}>
          <Title>CodeLeap Network</Title>
        </header>
        <main className={styles.mainContent}>
          <CreatePostForm
            onSubmit={handleSubmit}
            componentTitle="What's on your mind?"
            buttonMessage='create'
            handleInputs={{ title, setTitle, content, setContent }}
          />
          <GetPosts />
        </main>
      </section>
    </section>
  );
};

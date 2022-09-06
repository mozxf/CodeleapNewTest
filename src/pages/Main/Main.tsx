import styles from './Main.module.scss';
import { Title } from '@/components/Title/Title';
import { GetPosts } from '@/components/GetPosts/GetPosts';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { createPost } from '@/actions/postsActions';
import { DeletePostModal } from '@/components/DeletePostModal/DeletePostModal';
import { TDeleteHandler, TEditHandler } from '@/redux/reducers/modal';
import { EditPostModal } from '@/components/EditPostModal/EditPostModal';

export const Main = () => {
  const username = useSelector<RootState>((state) => state.username.value);
  const deleteHandler = useSelector<RootState>(
    (state) => state.modal.delete
  ) as TDeleteHandler;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleModal = useSelector<RootState>(
    (state) => state.modal.edit
  ) as TEditHandler;
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (!username) {
      navigate('/signup');
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch('https://dev.codeleap.co.uk/careers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, title, content }),
      });
      dispatch(createPost);
      setTitle('');
      setContent('');
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <section className={styles.background}>
      <DeletePostModal open={deleteHandler.open} />
      <EditPostModal open={handleModal.open} />
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

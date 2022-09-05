import styles from './Main.module.scss';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';

import { Title } from '@/components/Title/Title';
import { GetPosts } from '@/components/GetPosts/GetPosts';

export const Main = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const shouldDisableButton = !content || !title;

  return (
    <section className={styles.background}>
      <section className={styles.content}>
        <header className={styles.header}>
          <Title>CodeLeap Network</Title>
        </header>
        <main className={styles.mainContent}>
          <form className={styles.createPostForm}>
            <Title className={styles.title}>What's on your mind?</Title>
            <Input
              id='title'
              label='Title'
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              placeholder='Hello world'
              type='text'
            />
            <Input
              textarea
              id='content'
              label='Content'
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setContent(e.target.value)
              }
              placeholder='Content here'
            />
            <Button disabled={shouldDisableButton}>Create</Button>
          </form>
          <GetPosts />
        </main>
      </section>
    </section>
  );
};

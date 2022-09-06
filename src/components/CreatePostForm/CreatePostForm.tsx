import styles from './CreatePostForm.module.scss';
import React, { Dispatch } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';

type TInputsHandler = {
  title: string;
  setTitle: Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: Dispatch<React.SetStateAction<string>>;
};

interface ICreatePostForm {
  componentTitle: string;
  buttonMessage: string;
  onSubmit: React.FormEventHandler;
  className?: string;
  handleInputs: TInputsHandler;
}

export const CreatePostForm = ({
  componentTitle,
  buttonMessage,
  onSubmit,
  handleInputs,
  className,
}: ICreatePostForm) => {
  const { title, setTitle, content, setContent } = handleInputs;
  const shouldDisableButton = !content || !title;

  return (
    <form
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      onSubmit={onSubmit}
      className={`${styles.createPostForm} ${className}`}
    >
      <Title className={styles.title}>{componentTitle}</Title>
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
      <Button disabled={shouldDisableButton}>{buttonMessage}</Button>
    </form>
  );
};

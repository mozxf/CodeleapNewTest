import styles from './Signup.module.scss';
import { useDispatch } from 'react-redux';
import { Input } from '@/components/Input/Input';
import { defineUsername } from '@/actions/usernameActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button/Button';

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(defineUsername(username));
    navigate('/main');
  }

  return (
    <section className={styles.background}>
      <form onSubmit={handleSubmit} className={styles.usernameForm}>
        <h2 className={styles.title}>Welcome to CodeLeap network!</h2>
        <Input
          label='Please enter your username'
          id='username'
          type='text'
          placeholder='John doe'
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Button disabled={!username}>enter</Button>
      </form>
    </section>
  );
};

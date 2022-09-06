import styles from './Signup.module.scss';
import { defineUsername } from '@/actions/usernameActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem('username', username);
    dispatch(defineUsername(username));
    navigate('/main');
  }

  return (
    <section className={styles.background}>
      <form onSubmit={handleSubmit} className={styles.usernameForm}>
        <Title>Welcome to CodeLeap network!</Title>
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

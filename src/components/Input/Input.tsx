import { ChangeEventHandler } from 'react';
import styles from './Input.module.scss';

interface IInput {
  label: string;
  id: string;
  type?: 'text' | 'password';
  value: string;
  onChange: ChangeEventHandler;
  placeholder?: string;
  textarea?: boolean;
}

export const Input = ({
  label,
  id,
  type,
  value,
  placeholder,
  textarea,
  onChange,
}: IInput) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        {textarea ? (
          <textarea
            className={styles.input}
            name={id}
            id={id}
            cols={30}
            rows={5}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        ) : (
          <input
            className={styles.input}
            type={'text' || type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  );
};

import styles from './Input.module.scss';

interface TInput {
  label: string;
  id: string;
  type: 'text' | 'password';
  value: string;
  onChange: any;
  placeholder?: string;
}

export const Input = ({
  label,
  id,
  type,
  value,
  placeholder,
  onChange,
}: TInput) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          className={styles.input}
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

import styles from './Button.module.scss';

interface TButton {
  children: string;
  className?: string;
  disabled: boolean;
}

export const Button = ({ children, className, disabled }: TButton) => {
  return (
    <button disabled={disabled} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

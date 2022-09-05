import styles from './Button.module.scss';

interface IButton {
  children: string;
  className?: string;
  disabled: boolean;
}

export const Button = ({ children, className, disabled }: IButton) => {
  return (
    <button disabled={disabled} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

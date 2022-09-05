import styles from './Title.module.scss';

interface ITitle {
  children: string;
  className?: string;
}

export const Title = ({ children, className }: ITitle) => {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
};

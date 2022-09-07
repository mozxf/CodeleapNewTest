import React, { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface IButton {
  children: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

export const Button = ({ children, className, disabled, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

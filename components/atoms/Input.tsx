import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from 'styles/components/atoms/Form.module.scss';

export type InputProps = ComponentPropsWithoutRef<'input'> & { label: string };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <>
        <div className={styles.head}>
          <label htmlFor={name}>{label}</label>
        </div>
        <input
          className={styles.input_field}
          name={name}
          id={name}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);

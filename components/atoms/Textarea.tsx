import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from 'styles/components/atoms/Form.module.scss';

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  label: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <>
        <div className={styles.head}>
          <label htmlFor={name}>{label}</label>
        </div>
        <textarea
          className={styles.textarea_field}
          id={name}
          name={name}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);

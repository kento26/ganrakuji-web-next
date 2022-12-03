import {
  Path,
  UseFormRegister,
  FieldValues,
  FieldError,
  DeepMap,
} from 'react-hook-form';

import { ErrorText, Input, InputProps } from 'components/atoms';

import styles from 'styles/components/molecules/Form.module.scss';

type Props<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: Partial<DeepMap<T, FieldError>>;
} & Omit<InputProps, 'name'>;

export const FormInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  ...props
}: Props<T>) => {
  return (
    <div className={styles.form_container}>
      <Input label={label} {...register(name)} {...props} />
      {errors[name]?.message && (
        <div className={styles.error_area}>
          <ErrorText>
            <p>{errors[name]?.message as string}</p>
          </ErrorText>
        </div>
      )}
    </div>
  );
};

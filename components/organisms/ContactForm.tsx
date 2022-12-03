import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  TitleUnderLine,
  SubmitButton,
  ErrorText,
  Loading,
} from 'components/atoms';
import { FormInput, FormTextarea } from 'components/molecules';
import { ScrollAnimationObserver } from 'components/providers';
import { contactSchema, ContactSchema } from 'schema';
import { useAxios } from 'hooks/useAxios';

import styles from 'styles/components/organisms/ContactForm.module.scss';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const { loading, error, data, axiosQuery } = useAxios<{ success: boolean }>();

  const onSubmit: SubmitHandler<ContactSchema> = (input) => {
    axiosQuery({
      url: 'https://ganrakuji-api.onrender.com/contact',
      // url: 'http://localhost:4000/contact',
      method: 'POST',
      data: input,
    });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__head}>
        <ScrollAnimationObserver>
          <TitleUnderLine>
            <h2>お問い合わせ</h2>
          </TitleUnderLine>
        </ScrollAnimationObserver>
      </div>

      {data?.success ? (
        <p className={styles.completion_message}>
          お問い合わせ頂きありがとうございます。
        </p>
      ) : (
        <div className={styles.contact__body}>
          {loading && <Loading />}

          {error && (
            <div className={styles.common_error}>
              <ErrorText>
                <p>{error}</p>
              </ErrorText>
            </div>
          )}

          <ScrollAnimationObserver>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.contact__unit}>
                <FormInput<ContactSchema>
                  label="メールアドレス"
                  name="userEmail"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className={styles.contact__unit}>
                <FormInput<ContactSchema>
                  label="お名前"
                  name="userName"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className={styles.contact__unit}>
                <FormTextarea<ContactSchema>
                  label="お問い合わせ内容"
                  name="message"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className={styles.contact__unit}>
                <SubmitButton />
              </div>
            </form>
          </ScrollAnimationObserver>
        </div>
      )}
    </section>
  );
};

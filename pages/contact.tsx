import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { ContactForm } from 'components/organisms';
import { BasicLayout } from 'components/templates';

const Contact: NextPage = () => {
  return (
    <BasicLayout>
      <NextSeo title="願楽寺 | お問い合わせ" />
      <ContactForm />
    </BasicLayout>
  );
};

export default Contact;

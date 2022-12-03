import { ReactNode } from 'react';

import { Header, Footer } from 'components/organisms';
import { ContactLinkButton } from 'components/atoms';

export const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <ContactLinkButton />
      <main>{children}</main>
      <Footer />
    </>
  );
};

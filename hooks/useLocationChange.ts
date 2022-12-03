import { useRouter } from 'next/router';
import { useCallback } from 'react';

// callbackはモーダルを閉じる関数が渡されている。
type Props = { callback?: () => void };

export const useLocationChange = ({ callback }: Props = {}) => {
  const router = useRouter();
  const { pathname } = router;

  const smoothScroll = useCallback((id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /**
   * ページ内リンクの場合はスムーズスクロールする。
   * 別ページの場合はuseRouterで遷移する。
   * callbackはモーダルを閉じる関数などを渡す。
   */
  const transitionPage = useCallback(
    (
      element: React.MouseEvent<HTMLElement, MouseEvent>,
      href: string,
      id: string,
    ) => {
      element.preventDefault();

      if (!href.includes('#')) {
        if (callback) callback();
        router.push(href);
        return;
      }

      if (pathname === '/') {
        if (callback) callback();
        smoothScroll(id);
      } else {
        router.push(href);
      }
    },
    [],
  );

  return { smoothScroll, transitionPage };
};

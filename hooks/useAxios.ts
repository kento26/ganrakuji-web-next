import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { useState, useCallback } from 'react';

import { networkError, typographicalError } from 'lib/errorMessage';

export const useAxios = <T>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<T | null>(null);

  const axiosQuery = useCallback((options: AxiosRequestConfig) => {
    setLoading(true);

    axios<T>(options)
      .then((response) => {
        const { data, status } = response;
        setData(data);
      })
      .catch((error: AxiosError) => {
        switch (error.response?.status) {
          /**
           * TODO
           * Zodのバリデーションでエラーがあった場合、api側で401エラーを返している。
           * Zodのバリデーションエラーとそうでない場合の分岐方法
           */
          case 401:
            console.error(error);
            const { data } = error.response as any;
            if (data?.zodErrorMessage) {
              setError(data.zodErrorMessage);
            } else {
              setError(typographicalError);
            }
            break;

          case 404:
            console.error(error);
            setError(networkError);
            break;

          default:
            console.error(error);
            setError(networkError);
            break;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, data, axiosQuery };
};

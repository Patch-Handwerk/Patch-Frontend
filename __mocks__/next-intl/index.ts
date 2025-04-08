export * from 'next-intl';

export const useTranslations = (namespace = 'namespace') => {
  return (key = 'key') => {
    return `${namespace}.${key}`;
  };
};

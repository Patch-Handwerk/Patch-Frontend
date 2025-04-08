import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('homepage');

  return (
    <div>
      <main>
        <h1>{t('title')}</h1>
      </main>
      <footer></footer>
    </div>
  );
}

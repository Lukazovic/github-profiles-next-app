import NextHead from 'next/head';

type HeadProps = {
  title?: string;
  faviconUrl?: string;
  description?: string;
};

const Head = ({
  title = 'Github Profiles by Lucas Vieira',
  description = 'In this project you can create your own Github Profile Page with the main informations and share it with your friends or put it on your resumè.',
  faviconUrl = '/favicon.ico',
}: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href={faviconUrl} />

    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

    <link rel="stylesheet" href="/nprogress.css" type="text/css" />

    <meta name="description" content={description} />
  </NextHead>
);

export default Head;

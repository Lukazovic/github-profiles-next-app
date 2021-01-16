import NextHead from 'next/head';

interface IHeadProps {
  title: string;
  faviconUrl: string;
  description: string;
}

const Head = ({ title, faviconUrl, description }: IHeadProps) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href={faviconUrl} />

    <meta charSet="UTF-8" />

    <meta name="description" content={description} />

    <link rel="stylesheet" href="/nprogress.css" type="text/css" />
  </NextHead>
);

Head.defaultProps = {
  title: 'Github Profiles by Lucas Vieira',
  faviconUrl: '/favicon.ico',
  description:
    'In this project you can create your own Github Profile Page with the main informations and share it with your friends or put it on your resumè.',
};

export default Head;

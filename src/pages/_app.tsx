import App from 'next/app';
import GlobalStyles from '../Styles/globalstyles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext))
});

export default MyApp;

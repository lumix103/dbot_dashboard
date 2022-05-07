import App from 'next/app'
import { setCookie } from 'nookies'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
// calls page's `getInitialProps` and fills `appProps.pageProps`
const appProps = await App.getInitialProps(appContext);
if(appContext.router.query.token) {
  setCookie(appContext.router.query.token, 'authorization', appContext.router.query.token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
});
}

return { ...appProps }
}
export default MyApp

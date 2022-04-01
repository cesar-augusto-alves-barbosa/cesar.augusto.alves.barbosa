import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/global.css';
import '../css/index.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default MyApp
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/global.css';
import '../css/index/banner.css';
import '../css/index/aboutme.css';
import '../css/index/experience.css';
import '../css/index/home.css';
import '../css/index/skills.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default MyApp
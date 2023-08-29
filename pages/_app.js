import '../styles/style.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'

import { library } from '../utils/fontAwesome'; 

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
  
export default MyApp;
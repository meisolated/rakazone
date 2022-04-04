import Layout from '../components/Layout/Layout.js'
import '../styles/globals.css'
import LoadingBar from '../components/LoadingBar/index.js'

function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp

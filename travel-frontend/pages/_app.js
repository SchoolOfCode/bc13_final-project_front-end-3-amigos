import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Travel, Places. What to do in Best spots in "></meta>
    <title>Amigo Travel</title>
</Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </div>
  )
}

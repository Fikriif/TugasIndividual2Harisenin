import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'
import theme from '../utils/theme'
import AuthStateChangeProvider from '../context/auth'
import { UserProvider } from '../context/user'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>
        Netfilx - MUI
      </title>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
    </Head>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AuthStateChangeProvider>
          <Component {...pageProps} />
        </AuthStateChangeProvider>
      </UserProvider>
    </ThemeProvider>
    </>
  )
}

export default MyApp

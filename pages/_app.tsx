import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '~~/assets/scss/index.scss'
import { store } from '~~/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

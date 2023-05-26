import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from 'state'
import { SWRConfig } from 'swr'
import { appWithTranslation } from 'next-i18next'
import { Web3Provider } from 'providers/Web3'
import { ChakraProvider } from 'providers/Chakra'
import { useIsMounted } from 'hooks/useIsMounted'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'focus-visible/dist/focus-visible'

import Seo from 'components/Layouts/Seo'
import { Layout } from 'components/Layouts'

import TransactionUpdater from '../state/transactions/updater'

function App({ Component, pageProps }: AppProps<{ initialReduxState: any }>) {
  const store = useStore(pageProps.initialReduxState)
  const isMounted = useIsMounted()

  return (
    <ChakraProvider>
      <Web3Provider>
        <Provider store={store}>
          <SWRConfig>
            {isMounted && (
              <>
                <Seo />
                <TransactionUpdater />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  closeOnClick
                  limit={2}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover
                  style={{ zIndex: 99999 }}
                />
              </>
            )}
          </SWRConfig>
        </Provider>
      </Web3Provider>
    </ChakraProvider>
  )
}

export default appWithTranslation(App)

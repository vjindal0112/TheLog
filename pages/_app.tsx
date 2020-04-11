import { AppContext, initialContext } from '../AppContext'
import '../assets/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={initialContext}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
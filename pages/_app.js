import './styles.css'
import { makeServer } from "./api/mirage.js"


if (process.env.NODE_ENV === "development") {
  makeServer ({ environment: "development" })
}
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;


import type { AppProps } from "next/app"
import Menu from "../components/Menu"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <>
        <Component {...pageProps} />
      </>
    </>
  )
}

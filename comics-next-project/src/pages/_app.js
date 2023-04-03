import { LanguageProvider } from "@/context/languageContext"
import { SearchProvider } from "@/context/searchContext"
import "@/styles/output.css"

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

//* Vamos a usar i18n

import { createContext, useCallback, useContext } from "react"
import es from "../translations/es.json"
import en from "../translations/en.json"
import { useRouter } from "next/router"

const languageContext = createContext()

const languages = { es, en }

const useLanguage = () => {
  const context = useContext(languageContext)
  if (!context) throw Error("useLanguageContext must be used whitin a Provider")
  return context
}

const LanguageProvider = ({ children }) => {
  const { locale, locales } = useRouter()

  const txt = useCallback((key, ...args) => {
    //console.log(args)
    let translation = languages[locale][key]
    if (args.length === 0) return translation
    args.forEach((value, index) => {
      translation = translation.replace(`\${${index + 1}}`, value)
    })
    return translation
  })

  const exports = { txt, locales }

  return (
    <languageContext.Provider value={exports}>
      {children}
    </languageContext.Provider>
  )
}

export default useLanguage
export { languageContext, LanguageProvider }

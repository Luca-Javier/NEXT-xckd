import useSearch from "@/hooks/useSearch"
import { createContext, useContext } from "react"

const searchContext = createContext()

const useSearchContext = () => {
  const context = useContext(searchContext)
  /* if (!context)
    throw new Error("useSearchContext must be used within a Provider") */
  return context
}

const SearchProvider = ({ children }) => {
  const exports = useSearch()

  return (
    <searchContext.Provider value={exports}>{children}</searchContext.Provider>
  )
}

export default useSearchContext
export { SearchProvider, searchContext }

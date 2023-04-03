import { useRef, useState } from "react"
import search from "../../helpers/search"

const useSearch = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("")

  const inputRef = useRef()

  const handleChange = async e => {
    setQuery(e.target.value)
    if (e.target.value === "") return setResults([])
    const searchs = await search(e.target.value)
    //const searchs = await fetch(`../pages/api/search?query=${e.target.value}`)
    setResults(searchs)
  }

  return { handleChange, inputRef, results, query }
}

export default useSearch

import useSearch from "@/hooks/useSearch"
import Link from "next/link"
import useSearchContext from "../context/searchContext"
import useLanguage from "@/context/languageContext"

const Search = ({}) => {
  const { handleChange, inputRef, results, query } = useSearch()
  const { txt } = useLanguage()

  return (
    <>
      <input
        className="rounded-lg w-40 border-gray-500 px-2 border-2 text-sm z-50"
        ref={inputRef}
        type="search"
        placeholder={txt("SEARCH_PLACEHOLDER")}
        onChange={handleChange}
      />
      {Boolean(results.length) && (
        <div className={`relative -top-2 left-0 -z-40`}>
          <ul className="w-40 absolute top-0 left-0 bg-white rounded-b-xl border-gray-50 shadow-lg">
            {results.map(result => {
              return (
                <li
                  key={result.id}
                  className="px-2 py-1 hover:bg-slate-100 hover:font-semibold">
                  <Link
                    className="block text-ellipsis overflow-hidden  whitespace-nowrap"
                    href={`/comic/${result.id}`}>
                    {result.title}
                  </Link>
                </li>
              )
            })}
            <li className="px-2 py-1 hover:bg-slate-100 hover:font-semibold text-center text-blue-500 font-semibold overflow-hidden  hover:rounded-b-xl">
              <Link className="block " href={`/search/?query=${query}`}>
                {txt("SEE_RESULTS", results.length)}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
export default Search

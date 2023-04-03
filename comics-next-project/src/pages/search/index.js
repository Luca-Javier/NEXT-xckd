import LayoutMaxWidth from "@/components/LayoutMaxWidth"
import SearchCard from "@/components/SearchCard"
import Head from "next/head"
import search from "../../../helpers/search"
import useSearch from "@/hooks/useSearch"
import { useEffect } from "react"
import useSearchContext from "@/context/searchContext"
import useLanguage from "@/context/languageContext"

const Search = ({ query, searchs }) => {
  //const { results: searchs } = useSearchContext()
  const { txt } = useLanguage()

  return (
    <>
      <Head>
        <title>xkcd | Results for {query}</title>
        <meta name="description" content={`Search results for ${query}`} />
      </Head>
      <LayoutMaxWidth>
        <h1 className="my-8">
          {txt("SEARCH_RESULTS_TITLE", searchs.length, query)}
        </h1>
        <div className="my-8 bg-slate-600 py-4 rounded-3xl">
          {searchs &&
            searchs.map(search => (
              <SearchCard search={search} key={search.id} />
            ))}
        </div>
      </LayoutMaxWidth>
    </>
  )
}
export default Search

export async function getServerSideProps({ query: queryParam }) {
  //* PUEDO recibir params o query. params es el valorque agarra el archivo. query incluye ese y cualquier variable que le pase por la URL
  const { query = "" } = queryParam
  //Sí no hacemos el ="" y no nos llega parametro, entonces mandamos un undefined a un JSON y explota la app, mejor mandarle un string vacío o un null

  /*  const res = await fetch(`http://localhost:3000/api/search?query=${query}`),
    searchs = await res.json() */
  //* Hacer un fetch a uno mismo, o sea localhost/mismo-host es al pedo, es tirar recursos y tiempo porque el hacer un fetch tarda. Es mejor exportar la lógica y llamar directo desde acá a algolia.

  //? Entonces los microservicios que nos ofrece next son más por si queremos dejar una api para otorgar datos u otra cosa, o desde el cliente

  const searchs = await search(query)

  return {
    props: { query, searchs },
  }
}

import algoliasearch from "algoliasearch"

//* Las guarda en .env.local
const APP_ID = process.env.APP_ID
const API_KEY = process.env.API_KEY

const search = async query => {
  const client = algoliasearch(APP_ID, API_KEY)
  const index = client.initIndex("comics_xkcd")

  const { hits } = await index.search(query, {
    attributesToRetrieve: ["id", "title", "img", "alt", "height", "width"],
    hitsPerPage: 10,
  })

  return hits
}
export default search

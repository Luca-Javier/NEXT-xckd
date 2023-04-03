// hello_algolia.js

import search from "../../../helpers/search"

export default async function handler(req, res) {
  //? req.query = parametro. query.query es porque el parametro por URL es query

  /* const { hits } = await index.search(req.query.query, {
    attributesToRetrieve: ["id", "title", "img", "alt", "height", "width"],
    hitsPerPage: 10,
  })
  res.status(200).json(hits) */

  const searchs = await search(req.query.query)
  res.status(200).json(searchs)
}

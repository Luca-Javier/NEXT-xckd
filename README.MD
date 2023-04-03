# A internationalized COMICS page with NextJS

check it out [here][page].

All comics are by [xkcd][comics].

## Comics Scraped with NodeJS

All comics data are within json files in `comics-next-project/comics/`.

## Algolia API for searchs

In `comics/index.json` you have an index to publish it in [Algolia][algolialink], for the search API.
If you want to get more or less comics avaliable go to `index.js` and change.

`const INITIAL_ID_XKCD_COMICS = 2500`  
`const MAX_ID_XKCD_COMICS = 2588`

don't change `MAX_ID_XKCD_COMICS` if you aren't sure wich is the last id comic of xkcd, just lower the **INITIAL_ID**.

Then to renovate the data and get ultimates comics run `npm run scrap`.

To use the search yo will need to refill the `.env.example` variables with [Algolia][algolialink]

[comics]: https://xkcd.com/

[page]:
[algoliaLink]:https://www.algolia.com/

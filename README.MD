# A internationalized COMICS page with NextJS

All comics are by xkcd (hacer link)

## Comics Scraped with NodeJS

All comics data is in json files in `comics-next-project/comics/`.

## Algolia API for searchs

In `comics/index.json` you have an index to publish it in Algolia, for the search API.
If you want to get more or less comics avaliable go to `index.js` and change

`const INITIAL_ID_XKCD_COMICS = 2500`
`const MAX_ID_XKCD_COMICS = 2588`

don't change `MAX_ID_XKCD_COMICS` if you aren't sure wich is the last id comic of xkcd. Just lower the _initial id_

Then to renovate the data and get ultimates comics run `npm run scrap`

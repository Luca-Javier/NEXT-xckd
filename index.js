//* DATO IMPORTANTE, midu usa el npm i con -E, que nos saca el ^ de las dependencias

//en este archivo vamos a conseguir el json con los comics de la páginas XKCD
import axios from "axios"
import fs from "fs-extra"
import { getImageSize } from "./getImageSize.js"

//const fs = require("fs") //? fs = fileSystem y es lo mismo que un import (el require)

const INITIAL_ID_XKCD_COMICS = 2500
const MAX_ID_XKCD_COMICS = 2588

let jsonIndexContent = []

for (let id = INITIAL_ID_XKCD_COMICS - 1; id < MAX_ID_XKCD_COMICS; id++) {
  const url = `https://xkcd.com/${id}/info.0.json`

  const { data } = await axios.get(url)

  //? Sacas las propiedades que no queres y guardas lo demás es restOfComic
  const { num, news, transcript, img, ...restOfComic } = data
  const { height, width } = await getImageSize(img)
  const comicToStore = {
    id,
    img,
    height,
    width,
    ...restOfComic,
  }

  jsonIndexContent.push(comicToStore)

  await fs.writeJSON(`./comics-next-project/comics/${id}.json`, comicToStore)
}

await fs.writeJSON(`./comics-next-project/comics/index.json`, jsonIndexContent)

/* 
* SCRAPING

Esto no es una boludes que hacemos ahora para movernos más rápido durante la programación. Sino que es una estrategia real.

Esta página que usamos para sacar los comics, no tiene una API, sino que estamos llendo a cada comic individual y lo descagamos.

Esto podríamos evitarlo haciendo 2500 fetchs en getStaticProps. Pero obviamente es una estupides y la verdad es que esto es re util, lo tenemos local y es rápido.

Sí ponemos un programa que nos automatize el codigo node este y la build cada día, ya tenemos un sitio funcional perfecto


*/

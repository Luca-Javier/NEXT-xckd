import Image from "next/image"
import fs from "fs/promises"
import Link from "next/link"
import { basename } from "path"
import LayoutMaxWidth from "@/components/LayoutMaxWidth"
import useLanguage from "@/context/languageContext"

const Comic = ({ comicData }) => {
  const { txt } = useLanguage()
  const {
    img,
    alt,
    title,
    width,
    height,
    hasNext,
    hasPrevious,
    nextId,
    prevId,
  } = comicData

  return (
    <>
      <LayoutMaxWidth>
        <section className=" m-auto">
          <h1 className="font-bold text-3xl text-center my-8">{title}</h1>
          <Image
            width={width}
            height={height}
            src={img}
            alt={alt}
            className="block mx-auto"
          />
        </section>
        <p className="text-center mx-8 mt-8">{alt}</p>

        <section className="flex justify-between w-7/12 m-auto my-8">
          {hasPrevious && (
            <Link href={`/comic/${prevId}`}>🢀 {txt("PREVIOUS")}</Link>
          )}
          {hasNext && <Link href={`/comic/${nextId}`}>{txt("NEXT")} 🢂</Link>}
        </section>
      </LayoutMaxWidth>
    </>
  )
}
export default Comic

//* https://youtu.be/pFT8wD2uRSE?t=15066

/*
TEORÍA
getStaticPaths nos lo pide Next porque es necesario para la build, pero en el momento de desarrollo, no importa, no importa lo que devuelve. Lo que en verdad hace la función es que tiene que tener renderizado TODOS los FUTUROS POSIBLES VALORES, o sea que tengo que llenarlo con todas las id´s de los json y para la build, no para mi ahora porque si lo obtengo dinamicamente

 */
export async function getStaticPaths({ locales }) {
  //* Recibe locales y defaultLocale
  const files = await fs.readdir("./comics")

  let paths = []

  locales.forEach(locale => {
    let localePath = files.map(file => {
      const id = basename(file, ".json")
      return { params: { id }, locale }
    })
    paths.push(...localePath)
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(props) {
  //console.log("porpr", props)
  const { params } = props
  const { id } = params

  const readFile = async () => {
    const contentFile = await fs.readFile(`./comics/${id}.json`, "utf-8")

    return JSON.parse(contentFile)
  }

  const comicData = await readFile()

  let prevId = id - 1,
    nextId = +id + 1
  //? id es un string, un parametro siempre es string. Sí yo hago "2" - 1 se entiende que es una resta. Sí hago "2" + 1 puede ser concatenación. Sí hago +"2" +1 entonces es una suma

  //? Me devuelve si la petición fue exitosa o no. Sí lo hago con promse.all y una no es exitosa me puede saltar un error
  const [prevResult, nextResult] = await Promise.allSettled([
    fs.readFile(`./comics/${prevId}.json`),
    fs.readFile(`./comics/${nextId}.json`),
  ])

  const hasPrevious = prevResult.status === "fulfilled"
  const hasNext = nextResult.status === "fulfilled"

  return {
    props: {
      comicData: { ...comicData, hasNext, nextId, hasPrevious, prevId },
    },
  }
}

import LayoutMaxWidth from "@/components/LayoutMaxWidth"
import useLanguage from "@/context/languageContext"
import fs from "fs/promises"

import Image from "next/image"
import Link from "next/link"

export default function Home({ comics }) {
  const { txt } = useLanguage()

  return (
    <LayoutMaxWidth>
      <h2 className="text-3xl font-bold text-center my-8">
        {txt("LASTEST_COMICS")}
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-md lg:max-w-3xl  mx-auto text-center">
        {comics.map(comic => (
          <Link key={comic.id} href={`comic/${comic.id}`} className="mb-4">
            <h3 className="font-bold text-sm text-center mb-4">
              {comic.title}
            </h3>
            <Image
              width={comic.width}
              height={comic.height}
              src={comic.img}
              alt={comic.alt}
              className="block mx-auto"
            />
          </Link>
        ))}
      </section>
    </LayoutMaxWidth>
  )
}

export async function getStaticProps() {
  const files = await fs.readdir("./comics")
  const lastestComicsFiles = files.slice(-20, -1)

  const promiseReadFiles = lastestComicsFiles.map(async file => {
    const content = await fs.readFile(`./comics/${file}`, "utf-8")
    return JSON.parse(content)
  })

  const lastestComics = await Promise.all(promiseReadFiles)

  return {
    props: { comics: lastestComics },
  }
}

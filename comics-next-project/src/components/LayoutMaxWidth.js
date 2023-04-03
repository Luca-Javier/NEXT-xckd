import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import { SearchProvider } from "@/context/searchContext"
import useLanguage from "@/context/languageContext"

const LayoutMaxWidth = ({ children }) => {
  const { txt } = useLanguage()

  let headerHeight = "4rem"
  return (
    <>
      <Head>
        <title>{txt("SEO_TITLE")}</title>
        <meta name="description" content="Comics for developers" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta property="og:locale" content="en" /> */}
      </Head>

      <Header height={headerHeight} />
      <main className="max-w-md lg:max-w-3xl mx-auto min-h-screen ">
        {children}
      </main>

      <Footer />
      <style jsx>
        {`
          main {
            padding-top: ${headerHeight};
          }
        `}
      </style>
    </>
  )
}
export default LayoutMaxWidth

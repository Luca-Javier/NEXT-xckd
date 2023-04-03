import Link from "next/link"
import search from "../../helpers/search"
import { useEffect, useRef, useState } from "react"
import Search from "./Search"
import useLanguage from "@/context/languageContext"
import LanguageDropdown from "./LanguageDropdown"

const Header = ({ height }) => {
  const { txt } = useLanguage()

  return (
    <>
      <header className=" p-4  w-full bg-slate-600 fixed top-0">
        <div className="flex justify-between items-center max-w-md lg:max-w-3xl mx-auto ">
          <div className="flex items-center">
            <h1 className="font-bold text-3xl">
              NEXT<span className="text-xs">xkcd</span>
            </h1>
          </div>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-sm hover:text-sky-600">
                  {txt("HOME")}
                </Link>
              </li>
              <li>
                <Search />
              </li>
              <li>
                <LanguageDropdown />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>
        {`
          header {
            height: ${height};
          }
        `}
      </style>
    </>
  )
}

export default Header

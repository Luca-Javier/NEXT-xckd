import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const LanguageDropdown = () => {
  const [active, setActive] = useState(false)
  const { locale: actualLocale, locales, asPath } = useRouter()

  useEffect(() => {
    document.addEventListener("click", e => {
      const show = () => setActive(true)
      const ocult = () => setActive(false)

      if (
        e.target.matches("#language-dropdown") ||
        e.target.matches("#language-dropdown *")
      ) {
        show()
        if (e.target.matches("a")) ocult()
      } else ocult()
    })
  }, [])

  return (
    <article id="language-dropdown">
      <input
        disabled
        className="text-center bg-white rounded-lg font-semibold w-10 border-gray-500 px-2 border-2 text-sm z-50"
        value={actualLocale}
      />
      {active && (
        <div className={`relative -top-2 left-0 -z-40`}>
          <ul className="absolute top-0 left-0 bg-white rounded-b-xl border-gray-50 shadow-lg">
            {locales.map((locale, i) => {
              if (locale === actualLocale) return null
              else
                return (
                  <li
                    className="px-2 py-1 text-center hover:bg-slate-100 hover:font-semibold w-10"
                    key={i}>
                    <Link href={asPath} locale={locale}>
                      {locale}
                    </Link>
                  </li>
                )
            })}
          </ul>
        </div>
      )}
    </article>
  )
}
export default LanguageDropdown

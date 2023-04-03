import useLanguage from "@/context/languageContext"

const Footer = () => {
  const { txt } = useLanguage()
  return (
    <footer className="text-center w-screen p-2 font-bold  bg-slate-100">
      <p>
        {txt("PAGE_DESIGNED_BY")}
        <a
          href="https://www.linkedin.com/in/luca-javier-a103a2231/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500">
          @Luca-Javier
        </a>{" "}
        - {txt("ALL_COMICS_BY")}
        <a
          href="https://xkcd.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500">
          xkcd
        </a>
      </p>
    </footer>
  )
}
export default Footer

import Image from "next/image"
import Link from "next/link"

const SearchCard = ({ search }) => {
  const { title, alt, img, height, width, id } = search
  return (
    <Link
      href={`/comic/${id}`}
      className="flex items-center justify-center bg-slate-300 hover:bg-slate-100 m-4 rounded-xl p-4">
      <Image src={img} alt={alt} height={height / 4} width={width / 4} />
      <h2 className="text-center">{title}</h2>
      <style jsx>
        {`
          h2 {
            flex-grow: 1;
          }
        `}
      </style>
    </Link>
  )
}
export default SearchCard

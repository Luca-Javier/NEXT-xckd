/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgs.xkcd.com"],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
}
//* La default no se ve en la URL, pero podemos ver cualquiera con useRouter.locale
module.exports = nextConfig

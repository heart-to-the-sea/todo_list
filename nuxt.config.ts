// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["./style/index.less"],
  app: {
    pageTransition: { name: "todo", mode: "out-in" },
  },
  modules: [
    "@element-plus/nuxt",
    "@formkit/auto-animate",
  ],
});
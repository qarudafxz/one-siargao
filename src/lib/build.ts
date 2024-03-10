export const build = (path: string) => {
 return import.meta.env.DEV
  ? `http://localhost:8000/${path}`
  : `${import.meta.env.VITE_API_PRODUCTION_URL}/${path}`
}

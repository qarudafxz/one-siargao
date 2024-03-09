export const build = (path: string) => {
 return import.meta.env.DEV ? `http://localhost:8000/${path}` : `/${path}`
}

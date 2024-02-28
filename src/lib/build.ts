export const build = (path: string) => {
 return import.meta.env.DEV ? `http://localhost:5173/${path}` : `/${path}`
}

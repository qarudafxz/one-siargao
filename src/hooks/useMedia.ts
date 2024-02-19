import { useState, useEffect } from 'react'

export const useMedia = (query: string) => {
 const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

 useEffect(() => {
  const mediaQueryList = window.matchMedia(query)

  const handleChange = (event: MediaQueryListEvent) => {
   setMatches(event.matches)
  }

  const initialEvent = {
   matches: mediaQueryList.matches
  } as MediaQueryListEvent
  handleChange(initialEvent)

  const mediaQueryListener = (event: MediaQueryListEvent) => handleChange(event)

  if (mediaQueryList.addEventListener) {
   mediaQueryList.addEventListener('change', mediaQueryListener)
  } else {
   mediaQueryList.addListener(mediaQueryListener)
  }

  return () => {
   if (mediaQueryList.removeEventListener) {
    mediaQueryList.removeEventListener('change', mediaQueryListener)
   } else {
    mediaQueryList.removeListener(mediaQueryListener)
   }
  }
 }, [query])

 return matches
}

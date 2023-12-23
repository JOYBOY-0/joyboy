// use window size hook

import { useEffect, useState } from 'react'
type DimensionsType = {
  width: number | undefined
  height: number | undefined
}
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<DimensionsType>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize) // Call handler right away so state gets updated with initial window size

    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

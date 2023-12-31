// use mouse position hook
import { useEffect, useState } from 'react'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = (ev: any) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

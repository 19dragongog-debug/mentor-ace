import { useState, useEffect } from 'react'

export default function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = end / (duration * 60)
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [end, duration])

  return <>{count.toLocaleString()}</>
}

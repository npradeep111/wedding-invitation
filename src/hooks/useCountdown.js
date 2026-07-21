import { useEffect, useState } from 'react'

/**
 * Returns a live-updating countdown breakdown { days, hours, minutes, seconds, isPast }
 * for a given target date (ISO string or Date instance).
 */
export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime()

  const calculate = () => {
    const now = Date.now()
    const distance = target - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds, isPast: false }
  }

  const [timeLeft, setTimeLeft] = useState(calculate)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculate())
    }, 1000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate])

  return timeLeft
}

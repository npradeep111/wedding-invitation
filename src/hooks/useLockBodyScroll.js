import { useLayoutEffect } from 'react'

/**
 * Locks page scroll while `locked` is true. Used to prevent scrolling
 * behind the opening invitation gate animation.
 */
export function useLockBodyScroll(locked) {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = locked ? 'hidden' : original || 'auto'

    return () => {
      document.body.style.overflow = original || 'auto'
    }
  }, [locked])
}

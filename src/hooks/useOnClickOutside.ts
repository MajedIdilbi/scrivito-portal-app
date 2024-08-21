import React from 'react'

export const useOnClickOutside = ({
  elementRef,
  onClick,
}: {
  elementRef: React.RefObject<HTMLElement>
  onClick: (event: MouseEvent) => void
}): void => {
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, false)
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
    }
  }, [onClick])

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      elementRef.current &&
      !elementRef.current.contains(event.target as HTMLElement)
    ) {
      onClick(event)
    }
  }
}

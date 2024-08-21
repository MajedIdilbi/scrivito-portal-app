import { createContext, useRef, useState } from 'react'
import { provideComponent } from 'scrivito'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { DXPSidebarLeftWidget } from './DXPSidebarLeftWidgetClass'
import Navigation from './SubComponent/Navigation'

provideComponent(DXPSidebarLeftWidget, () => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { isOpen, closeSidebar } = useIsSidebarOpen()

  useOnClickOutside({
    elementRef: sidebarRef,
    onClick: () => {
      if (isOpen) {
        closeSidebar()
      }
    },
  })

  return (
    <SidebarContext.Provider value={true}>
      <div ref={sidebarRef} className="jr-sidebar-left">
        <Navigation />
      </div>
    </SidebarContext.Provider>
  )
})

export const useIsSidebarOpen = (): {
  isOpen: boolean
  toggleIsSidebarOpen: () => void
  closeSidebar: () => void
} => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleIsSidebarOpen = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  return { isOpen, toggleIsSidebarOpen, closeSidebar }
}

const SidebarContext = createContext(true)

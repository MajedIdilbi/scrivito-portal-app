import { useState, createContext, useContext } from 'react'

import classnames from 'classnames'

const SidebarContext = createContext({
  isOpen: true,
  closeSidebar: () => {},
  toggleSidebarOpen: () => {},
})

const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeSidebar = () => setIsOpen(false)
  const toggleSidebarOpen = () => setIsOpen((prev) => !prev)

  return (
    <SidebarContext.Provider
      value={{ isOpen, closeSidebar, toggleSidebarOpen }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebarContext = () => {
  return useContext(SidebarContext)
}

const SidebarToggler: React.FC = () => {
  const { isOpen, toggleSidebarOpen } = useContext(SidebarContext)

  return (
    <div
      className={classnames('jr-buttonbar jr-sidebar-toggle', {
        open: isOpen,
      })}
      onClick={(event) => {
        event.stopPropagation()
        toggleSidebarOpen()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') toggleSidebarOpen()
      }}
      role="button"
      tabIndex={0}
    >
      <span className="lines"></span>
    </div>
  )
}

export { SidebarContextProvider, useSidebarContext, SidebarToggler }

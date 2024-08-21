import React from 'react'

import classnames from 'classnames'
import { useIsSidebarOpen } from '../DXPSidebarLeftWidgetComponent'

const SidebarToggler: React.FC = () => {
  const { isOpen, toggleIsSidebarOpen } = useIsSidebarOpen()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={classnames('jr-buttonbar jr-sidebar-toggle', {
        open: isOpen,
      })}
      onClick={(event) => {
        event.stopPropagation()
        toggleIsSidebarOpen()
      }}
    >
      <span className="lines"></span>
    </div>
  )
}

export default SidebarToggler

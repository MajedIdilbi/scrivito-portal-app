import React from 'react'

import { NavigationItemObject } from './types'
import { useIsSidebarOpen } from '../DXPSidebarLeftWidgetComponent'

const SidebarLeftNavigationItem: React.FC<NavigationItemObject> = ({
  iconName,
}) => {
  const { closeSidebar } = useIsSidebarOpen()

  return (
    <div>
      <i className={`jr-icon jr-icon-${iconName}`}></i>
      <span className="label">{'TEST LABEL'}</span>
    </div>
  )
}

export default SidebarLeftNavigationItem

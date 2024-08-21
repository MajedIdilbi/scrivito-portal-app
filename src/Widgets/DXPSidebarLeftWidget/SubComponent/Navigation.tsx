import React from 'react'

import { NAVIGATION_MAPPING } from './constants'
import SidebarLeftNavigationItem from './NavigationItem'

const SidebarLeftNavigation: React.FC = () => {
  return (
    <>
      {NAVIGATION_MAPPING.map(
        ({ titleTranslationKey, path, iconName, exact }) => {
          return (
            <SidebarLeftNavigationItem
              key={path}
              titleTranslationKey={titleTranslationKey}
              path={path}
              iconName={iconName}
              exact={exact}
            />
          )
        },
      )}
    </>
  )
}

export default SidebarLeftNavigation

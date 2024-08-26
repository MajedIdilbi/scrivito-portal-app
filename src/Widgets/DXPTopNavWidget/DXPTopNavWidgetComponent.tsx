import { provideComponent, currentUser } from 'scrivito'

import { DXPTopNavWidget } from './DXPTopNavWidgetClass'
import { ProfileMenu } from '@justrelate/jr-ui-components/ProfileMenu'
import { SidebarToggler } from '@/Components/SidebarContext'
import { SearchBar } from './SubComponent/searchBar/SearchBar'

provideComponent(DXPTopNavWidget, () => {
  const user = currentUser()

  return (
    <div className="jr-topbar">
      <SidebarToggler />

      <div title={user?.name()} className="jr-buttonbar jr-brand-neodxp" />

      <SearchBar />

      <ProfileMenu
        user={{ email: user?.email(), name: user?.name() }}
        menuItems={PROFILE_MENU_CONFIG}
      />
    </div>
  )
})

export const PROFILE_MENU_CONFIG = [
  {
    title: 'EN',
    iconClass: 'jr-icon-flag-en',
  },
  {
    title: 'DE',
    iconClass: 'jr-icon-flag-de',
  },
  {
    title: 'PL',
    iconClass: 'jr-icon-flag-pl',
  },
  {
    title: 'LOGOUT',
    iconClass: 'jr-icon-exit',
  },
]

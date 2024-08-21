import { provideComponent } from 'scrivito'

import { DXPOrgTableWidget } from './DXPOrgTableWidgetClass'

provideComponent(DXPOrgTableWidget, () => {
  return <div className="jr-topbar"></div>
})

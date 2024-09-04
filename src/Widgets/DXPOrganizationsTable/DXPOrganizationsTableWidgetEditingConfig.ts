import { provideEditingConfig } from 'scrivito'
import { DXPOrganizationsWidget } from './DXPOrganizationsTableWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPOrganizationsWidget, {
  title: 'DXP Organizations Table',
  thumbnail: Thumbnail,
})

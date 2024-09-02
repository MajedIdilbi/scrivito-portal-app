import { provideEditingConfig } from 'scrivito'
import { DXPOrganizationAddFormWidget } from './DXPOrganizationAddFormWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPOrganizationAddFormWidget, {
  title: 'DXP Organization Add Form',
  thumbnail: Thumbnail,
})

import { provideEditingConfig } from 'scrivito'
import { DXPOrgTableWidget } from './DXPOrgTableWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPOrgTableWidget, {
  title: 'DXP Org Table',
  thumbnail: Thumbnail,
})

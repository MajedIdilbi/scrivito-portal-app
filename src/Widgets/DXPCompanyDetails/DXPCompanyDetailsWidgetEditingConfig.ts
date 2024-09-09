import { provideEditingConfig } from 'scrivito'
import { DXPCompanyWidget } from './DXPCompanyDetailsWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPCompanyWidget, {
  title: 'DXP Company Details',
  thumbnail: Thumbnail,
})

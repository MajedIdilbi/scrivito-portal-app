import { provideEditingConfig } from 'scrivito'
import { DXPCompaniesWidget } from './DXPCompaniesTableWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPCompaniesWidget, {
  title: 'DXP Companies Table',
  thumbnail: Thumbnail,
})

import { provideEditingConfig } from 'scrivito'
import { DXPCompanyAddFormWidget } from './DXPCompanyAddFormWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPCompanyAddFormWidget, {
  title: 'DXP Company Add Form',
  thumbnail: Thumbnail,
})

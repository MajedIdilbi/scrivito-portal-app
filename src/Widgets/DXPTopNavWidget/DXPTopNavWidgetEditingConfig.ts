import { provideEditingConfig } from 'scrivito'
import { DXPTopNavWidget } from './DXPTopNavWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPTopNavWidget, {
  title: 'DXPTopNav',
  thumbnail: Thumbnail,
})

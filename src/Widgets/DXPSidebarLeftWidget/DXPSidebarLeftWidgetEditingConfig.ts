import { provideEditingConfig } from 'scrivito'
import { DXPSidebarLeftWidget } from './DXPSidebarLeftWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPSidebarLeftWidget, {
  title: 'DXPSidebarLeft',
  thumbnail: Thumbnail,
})

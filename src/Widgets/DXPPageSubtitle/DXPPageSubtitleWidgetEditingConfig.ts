import { provideEditingConfig } from 'scrivito'
import { DXPPageSubtitleWidget } from './DXPPageSubtitleWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPPageSubtitleWidget, {
  title: 'DXP Page Subtitle',
  thumbnail: Thumbnail,
  attributes: {
    text: {
      title: 'Content',
    },
  },
  properties: ['text'],
  initialContent: {
    text: 'Placeholder Text',
  },
})

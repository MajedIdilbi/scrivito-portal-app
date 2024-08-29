import { provideEditingConfig } from 'scrivito'
import { DXPHeaderCellWidget } from './DXPHeaderCellWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPHeaderCellWidget, {
  title: 'Text Table',
  thumbnail: Thumbnail,
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
    text: {
      title: 'Content',
    },
  },
  properties: ['alignment', 'text'],
  initialContent: {
    alignment: 'left',
    text: 'Text',
  },
})

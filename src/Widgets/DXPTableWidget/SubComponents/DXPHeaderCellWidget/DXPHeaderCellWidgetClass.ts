import { provideWidgetClass } from 'scrivito'

export const DXPHeaderCellWidget = provideWidgetClass('DXPHeaderCellWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    text: 'html',
  },
  extractTextAttributes: ['text'],
})

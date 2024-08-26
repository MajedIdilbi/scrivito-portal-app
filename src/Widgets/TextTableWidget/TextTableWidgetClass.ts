import { provideWidgetClass } from 'scrivito'

export const TextTableWidget = provideWidgetClass('TextTableWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    text: 'html',
  },
  extractTextAttributes: ['text'],
})

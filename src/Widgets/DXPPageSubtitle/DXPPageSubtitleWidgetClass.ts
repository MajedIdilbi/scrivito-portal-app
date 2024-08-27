import { provideWidgetClass } from 'scrivito'

export const DXPPageSubtitleWidget = provideWidgetClass(
  'DXPPageSubtitleWidget',
  { attributes: { text: 'string' }, extractTextAttributes: ['text'] },
)

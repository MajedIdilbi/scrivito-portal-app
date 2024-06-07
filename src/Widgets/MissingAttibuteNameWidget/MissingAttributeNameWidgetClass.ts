import { provideWidgetClass } from 'scrivito'

export const MissingAttributeNameWidget = provideWidgetClass(
  'MissingAttributeNameWidget',
  {
    attributes: {
      data: 'datalocator',
    },
  },
)

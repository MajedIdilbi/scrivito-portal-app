import { provideWidgetClass } from 'scrivito'

export const DXPOverviewListWidget = provideWidgetClass(
  'DXPOverviewListWidget',
  {
    attributes: {
      data: 'datalocator',
      content: 'widgetlist',
      header: 'widgetlist',
    },
  },
)

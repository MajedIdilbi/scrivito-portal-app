import { provideWidgetClass } from 'scrivito'

export const DXPTableWidget = provideWidgetClass('DXPTableWidget', {
  attributes: {
    data: 'datalocator',
    columnsNumber: 'integer',
    header: 'widgetlist',
    body: 'widgetlist',
  },
})

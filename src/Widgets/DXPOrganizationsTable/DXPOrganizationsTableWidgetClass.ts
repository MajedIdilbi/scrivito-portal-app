import { provideWidgetClass } from 'scrivito'

export const DXPOrganizationsWidget = provideWidgetClass(
  'DXPOrganizationsWidget',
  {
    attributes: {
      data: 'datalocator',
    },
  },
)

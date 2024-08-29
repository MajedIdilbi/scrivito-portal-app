import { provideEditingConfig } from 'scrivito'

import { DXPTableWidget } from './DXPTableWidgetClass'
import { DXPHeaderCellWidget } from './SubComponents/DXPHeaderCellWidget/DXPHeaderCellWidgetClass'
import { DXPTableDataWidget } from './SubComponents/DXPTableDataWidget/DXPTableDataWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DXPTableWidget, {
  title: 'DXP Table',
  thumbnail: Thumbnail,
  initialContent: {
    columnsNumber: 3,
    header: [
      new DXPHeaderCellWidget({}),
      new DXPHeaderCellWidget({}),
      new DXPHeaderCellWidget({}),
    ],
    body: [
      new DXPTableDataWidget({}),
      new DXPTableDataWidget({}),
      new DXPTableDataWidget({}),
    ],
  },
  properties: ['columnsNumber'],
})

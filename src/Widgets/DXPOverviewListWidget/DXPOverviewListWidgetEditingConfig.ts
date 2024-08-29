import { provideEditingConfig } from 'scrivito'
import { DXPOverviewListWidget } from './DXPOverviewListWidgetClass'
import Thumbnail from './thumbnail.svg'
import { DataTableWidget } from '../DataTableWidget/DataTableWidgetClass'
import { TextTableWidget } from '../TextTableWidget/TextTableWidgetClass'

provideEditingConfig(DXPOverviewListWidget, {
  title: 'DXP Overview List Widget',
  thumbnail: Thumbnail,
  initialContent: {
    content: [
      new DataTableWidget({}),
      new DataTableWidget({}),
      new DataTableWidget({}),
    ],
    header: [
      new TextTableWidget({}),
      new TextTableWidget({}),
      new TextTableWidget({}),
    ],
  },
})

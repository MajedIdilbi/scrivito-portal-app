import { provideEditingConfig } from 'scrivito'
import { DataTableWidget } from './DataTableWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DataTableWidget, {
  title: 'Data Table',
  thumbnail: Thumbnail,
  attributes: {
    showAs: {
      title: 'Show as',
      description: 'Default: Text',
      values: [
        { value: 'text', title: 'Text' },
        { value: 'currency', title: 'Currency' },
        { value: 'datetime', title: 'Date' },
        { value: 'link', title: 'Link' },
      ],
    },
    datetimeFormat: {
      title: 'Date format',
      description: 'Default: Only date',
      values: [
        { value: 'date', title: 'Only date' },
        { value: 'datetime', title: 'Date and time' },
        { value: 'relative', title: 'Relative' },
      ],
    },
    marginBottom: {
      title: 'Add margin bottom?',
    },
    data: {
      restrictDataTo: ['itemAttribute'],
    },
  },
  properties: (widget) =>
    [
      'showAs',
      widget.get('showAs') === 'datetime' ? 'datetimeFormat' : null,
      'valueSize',
      'marginBottom',
    ].filter((p): p is string => typeof p === 'string'),
  initialContent: {
    datetimeFormat: 'date',
    marginBottom: false,
    showAs: 'text',
    valueSize: 'body-font-size',
  },
})

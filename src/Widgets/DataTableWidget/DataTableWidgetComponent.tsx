import {
  connect,
  currentLanguage,
  provideComponent,
  useData,
  WidgetTag,
} from 'scrivito'
import { DataTableWidget } from './DataTableWidgetClass'
import { RelativeDate } from './RelativeDate'
import { localizeAttributeValue } from '../../utils/dataValuesConfig'
import {
  formatDateMonthAndYear,
  formatDateTime,
  formatFullDateTime,
  formatFullDayAndMonth,
} from '../../utils/formatDate'

const CURRENCY = 'EUR' // ISO 4217 Code

provideComponent(DataTableWidget, ({ widget }) => {
  const valueCssClassNames = ['text-multiline']

  const valueSize = widget.get('valueSize')
  if (valueSize && valueSize !== 'body-font-size') {
    valueCssClassNames.push(valueSize)
  }

  return (
    <WidgetTag className={widget.get('marginBottom') ? 'mb-3' : ''} tag='td'>
      <AttributeValue
        datetimeFormat={widget.get('datetimeFormat')}
        showAs={widget.get('showAs')}
      />
    </WidgetTag>
  )
})

const AttributeValue = connect(function AttributeValue({
  datetimeFormat,
  showAs,
}: {
  datetimeFormat: string | null
  showAs: string | null
}) {
  const dataItemAttribute = useData().dataItemAttribute()
  if (!dataItemAttribute) return localizeNotAvailable()

  const attributeValue = dataItemAttribute.get()

  if (showAs === 'currency') return <Currency value={attributeValue} />
  if (showAs === 'datetime') {
    return <Datetime value={attributeValue} datetimeFormat={datetimeFormat} />
  }
  if (showAs === 'link') return <Link value={attributeValue} />

  if (typeof attributeValue === 'number') {
    return <NumberText value={attributeValue} />
  }

  const value =
    typeof attributeValue === 'string'
      ? localizeAttributeValue({
          dataClass: dataItemAttribute.dataClass(),
          attributeName: dataItemAttribute.attributeName(),
          attributeValue,
        })
      : attributeValue

  return <Text value={value} />
})

function Text({ value }: { value: unknown }) {
  return value ? value.toString() : localizeNotAvailable()
}

const NumberText = connect(function NumberText({ value }: { value: number }) {
  return new Intl.NumberFormat(currentLanguage() ?? 'en', {
    useGrouping: Math.abs(value) >= 10000, // same as newer 'min2' option
  }).format(value)
})

const Currency = connect(function Currency({ value }: { value: unknown }) {
  if (value === null) return localizeNotAvailable()
  if (value instanceof Date) return localizeNotAvailable()

  const number = Number(value)
  if (Number.isNaN(number)) return localizeNotAvailable()

  const formatter = new Intl.NumberFormat(currentLanguage() ?? 'en', {
    style: 'currency',
    currency: CURRENCY,
  })

  return formatter.format(number)
})

const Datetime = connect(function Datetime({
  value,
  datetimeFormat,
}: {
  value: unknown
  datetimeFormat: string | null
}) {
  if (value === null) return localizeNotAvailable()
  if (typeof value !== 'string' && !(value instanceof Date)) {
    return localizeNotAvailable()
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return localizeNotAvailable()

  if (datetimeFormat === 'relative') {
    return <RelativeDate date={date} />
  }

  if (datetimeFormat === 'datetime') {
    return <span title={formatFullDateTime(date)}>{formatDateTime(date)}</span>
  }

  return (
    <span title={formatFullDayAndMonth(date)}>
      {formatDateMonthAndYear(date)}
    </span>
  )
})

function Link({ value }: { value: unknown }) {
  if (typeof value !== 'string') return localizeNotAvailable()
  if (!value) return localizeNotAvailable()

  return (
    <a href={value} target="_blank" rel="noreferrer">
      {value}
    </a>
  )
}

function localizeNotAvailable(): string {
  switch (currentLanguage()) {
    case 'de':
      return 'k.A.'
    default:
      return 'N/A'
  }
}

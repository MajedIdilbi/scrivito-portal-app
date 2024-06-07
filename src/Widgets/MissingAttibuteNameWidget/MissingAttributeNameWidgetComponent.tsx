import { provideComponent, useData } from 'scrivito'
import { MissingAttributeNameWidget } from './MissingAttributeNameWidgetClass'

provideComponent(MissingAttributeNameWidget, ({ widget }) => {
  const dataScope = useData()
  const dataScopeAttributeName = dataScope.attributeName()

  const dataItemAttribute = dataScope.dataItemAttribute()
  const dataItemAttributeAttributeName = dataItemAttribute?.attributeName()

  return (
    <div>
      <h1>Missing Attribute Name Widget</h1>
      <p>Widget ID: {widget.id()}</p>
      {/* @ts-expect-error Dirty hack */}
      <p>DataScope: {JSON.stringify(dataScope.toPojo())}</p>
      <p>dataItemAttribute: {dataItemAttribute ? 'exists' : 'empty'}</p>
      <p>dataScopeAttributeName: {dataScopeAttributeName}</p>
      <p>dataItemAttributeAttributeName: {dataItemAttributeAttributeName}</p>
    </div>
  )
})

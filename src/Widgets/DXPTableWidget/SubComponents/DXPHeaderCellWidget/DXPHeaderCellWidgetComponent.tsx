import { provideComponent, ContentTag, WidgetTag } from 'scrivito'
import { alignmentClassName } from '../../../../utils/alignmentClassName'
import { DXPHeaderCellWidget } from './DXPHeaderCellWidgetClass'

provideComponent(DXPHeaderCellWidget, ({ widget }) => (
  <WidgetTag tag="td">
    <ContentTag
      attribute="text"
      className={alignmentClassName(widget.get('alignment'))}
      content={widget}
      tag="p"
    />
  </WidgetTag>
))

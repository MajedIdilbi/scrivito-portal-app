import { ContentTag, provideComponent } from 'scrivito'

import { DXPPageSubtitleWidget } from './DXPPageSubtitleWidgetClass'

provideComponent(DXPPageSubtitleWidget, ({ widget }) => {
  return (
    <ContentTag attribute="text" className="row" content={widget} tag="div">
      <div className="col-sm-12 col-md-8">
        <p>{widget.get('text')}</p>
      </div>
    </ContentTag>
  )
})

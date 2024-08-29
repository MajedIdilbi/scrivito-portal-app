import { ContentTag, DataItem, provideComponent, useData } from 'scrivito'

import { EditorNote } from '@/Components/EditorNote'
import { DataErrorEditorNote } from '@/Components/DataErrorEditorNote'
import { DXPTableWidget } from './DXPTableWidgetClass'

provideComponent(DXPTableWidget, ({ widget }) => {
  const dataScope = useData()
  let dataError: unknown

  try {
    if (dataScope.isEmpty()) {
      return <EditorNote>The data column list is empty.</EditorNote>
    }
  } catch (error) {
    dataError = error
  }

  let dataItems: DataItem[]
  try {
    dataItems = dataScope.take()
  } catch (error) {
    dataItems = []
    dataError = error
  }

  if (dataError) return <DataErrorEditorNote error={dataError} />

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="responsive-stacked table-scroll-shadow">
            <table className="table table-hover mb-0">
              <thead>
                <ContentTag content={widget} attribute="header" tag="tr" />
              </thead>
              <tbody>
                {dataItems.map((dataItem) => (
                  <ContentTag
                    content={widget}
                    attribute="body"
                    dataContext={dataItem}
                    key={dataItem.id()}
                    tag="tr"
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
})

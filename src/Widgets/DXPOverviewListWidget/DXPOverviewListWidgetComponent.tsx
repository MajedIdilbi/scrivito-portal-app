import { ContentTag, DataItem, provideComponent, useData } from 'scrivito'
import { DXPOverviewListWidget } from './DXPOverviewListWidgetClass'
import { EditorNote } from '../../Components/EditorNote'
import { Loading } from '../../Components/Loading'
import { DataErrorEditorNote } from '../../Components/DataErrorEditorNote'

provideComponent(
  DXPOverviewListWidget,
  ({ widget }) => {
    const dataScope = useData()
    let dataError: unknown

    try {
      if (dataScope.isEmpty()) return <EditorNote>Data is empty.</EditorNote>
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
      <>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="responsive-stacked">

                <table className="table table-hover mb-0">
                  <thead>
                    <ContentTag
                      content={widget}
                      attribute="header"
                      className="col"
                      tag="tr"
                    />
                  </thead>
                  <tbody>

                    {dataItems.map((dataItem) => (
                      <ContentTag
                        content={widget}
                        attribute="content"
                        className="col"
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
      </>
    )
  },
  { loading: Loading },
)

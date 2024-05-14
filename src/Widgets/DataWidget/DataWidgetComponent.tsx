import { ContentTag, provideComponent, useData } from 'scrivito'
import { DataWidget } from './DataWidgetClass'
import { EditorNote } from '../../Components/EditorNote'
import { useContext } from 'react'
import { DataBatchContext } from '../../Components/DataBatchContext'
import { Loading } from '../../Components/Loading'

provideComponent(
  DataWidget,
  ({ widget }) => {
    const { limit } = useContext(DataBatchContext)
    const dataScope = useData().transform({ limit })

    const dataError = dataScope.getError()
    if (dataError) {
      return (
        <EditorNote>
          An communication error occurred: {dataError.message}
        </EditorNote>
      )
    }

    if (dataScope.isEmpty()) {
      return <EditorNote>Data is empty.</EditorNote>
    }

    return (
      <>
        {dataScope.take().map((dataItem) => (
          <ContentTag
            content={widget}
            attribute="content"
            className="col"
            dataContext={dataItem}
            key={dataItem.id()}
          />
        ))}
      </>
    )
  },
  { loading: Loading },
)

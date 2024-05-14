import { ContentTag, provideComponent, useData } from 'scrivito'
import { DataColumnListWidget } from './DataColumnListWidgetClass'
import { EditorNote } from '../../Components/EditorNote'
import { useContext } from 'react'
import { DataBatchContext } from '../../Components/DataBatchContext'
import { Loading } from '../../Components/Loading'

provideComponent(
  DataColumnListWidget,
  ({ widget }) => {
    const { limit } = useContext(DataBatchContext)
    const dataScope = useData().transform({ limit })

    if (dataScope.isEmpty()) {
      return <EditorNote>The data column list is empty.</EditorNote>
    }

    const columnsCount = widget.get('columnsCount') || '2'

    return (
      <div className={`row row-cols-1 row-cols-md-${columnsCount}`}>
        {dataScope.take().map((dataItem) => (
          <ContentTag
            content={widget}
            attribute="content"
            className="col"
            dataContext={dataItem}
            key={dataItem.id()}
          />
        ))}
      </div>
    )
  },
  { loading: Loading },
)

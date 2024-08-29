import { ContentTag, DataItem, provideComponent, useData } from 'scrivito'

import { DataErrorEditorNote } from '@/Components/DataErrorEditorNote'
import { EditorNote } from '@/Components/EditorNote'

import { DXPOrganizationsWidget } from './DXPOrganizationsTableWidgetClass'
import { Table } from '@justrelate/jr-ui-components'
import { ensureString } from '@/utils/ensureString'

provideComponent(DXPOrganizationsWidget, ({ widget }) => {
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
          <Table columns={tableCols} className="mb-0">
            {dataItems.map((dataItem) => (
              <tr key={dataItem.id()}>
                {tableCols.map((e) => (
                  <td key={e.accessor}>
                    {ensureString(dataItem.get(e.accessor))}
                  </td>
                ))}
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  )
})

const tableCols = [
  {
    accessor: 'name',
    title: 'Name',
  },
  {
    accessor: 'email',
    title: 'Email',
  },
  {
    accessor: 'phone',
    title: 'Phone',
  },
  {
    accessor: 'branch',
    title: 'Branch',
  },
  {
    accessor: 'region',
    title: 'Region',
  },
]

import {
  DataItem,
  LinkTag,
  navigateTo,
  Obj,
  provideComponent,
  useData,
  urlForDataItem,
} from 'scrivito'

import { Table } from '@justrelate/jr-ui-components/Table'
import { Button } from '@justrelate/jr-ui-components/Button'
import { BottomBar } from '@justrelate/jr-ui-components'

import { DataErrorEditorNote } from '@/Components/DataErrorEditorNote'
import { EditorNote } from '@/Components/EditorNote'

import { DXPOrganizationsWidget } from './DXPOrganizationsTableWidgetClass'
import { ensureString } from '@/utils/ensureString'
import { Nav } from 'react-bootstrap'

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

  const organizationAddPage = Obj.getByPermalink('organization-add-page')

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <Table columns={tableCols} className="mb-0">
            {dataItems.map((dataItem) => (
              <tr
                key={dataItem.id()}
                className="cursor-pointer"
                onClick={() => navigateTo(dataItem)
              }>
                {tableCols.map((e) => (
                  <td key={e.accessor}>
                    {ensureString(dataItem.get(e.accessor))}
                  </td>
                ))}
                <td className="visually-hidden visually-hidden-focusable">
                  {/* <LinkTag to={dataItem} /> */}
                  <a href={urlForDataItem(dataItem) as any} />
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>

      <BottomBar>
        <Button
          variant="primary"
          onClick={() =>
            navigateTo(() => organizationAddPage)
          }
        >
          Add
        </Button>
      </BottomBar>
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

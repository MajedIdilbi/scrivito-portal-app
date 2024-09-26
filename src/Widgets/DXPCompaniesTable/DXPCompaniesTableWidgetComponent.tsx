import { useRef, useState, useContext } from 'react'
import {
  DataItem,
  LinkTag,
  navigateTo,
  Obj,
  provideComponent,
  useData,
} from 'scrivito'

import { Table } from '@justrelate/jr-ui-components/Table'
import { Button } from '@justrelate/jr-ui-components/Button'
import { BottomBar } from '@justrelate/jr-ui-components'

import { DataErrorEditorNote } from '@/Components/DataErrorEditorNote'
import { EditorNote } from '@/Components/EditorNote'

import { DXPCompaniesWidget } from './DXPCompaniesTableWidgetClass'
import { ensureString } from '@/utils/ensureString'
import { Loading } from '../../Components/Loading'
import { DataBatchContext } from '../../Components/DataBatchContext'

provideComponent(
  DXPCompaniesWidget,
  () => {
    const dataScope = useData()
    const searchRef = useRef<HTMLInputElement>(null)
    const [searchValue, setSearchValue] = useState('')
    const { setSearch } = useContext(DataBatchContext)
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

    const onChange = () => {
      setSearchValue(searchRef.current?.value ?? '')
    }

    const onSearchClick = () => {
      setSearch!(searchValue)
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') onSearchClick()
    }

    if (dataError) return <DataErrorEditorNote error={dataError} />

    const organizationAddPage = Obj.getByPermalink('organization-add-page')

    return (
      <>
        <div className="row">
          <div className="col-sm-7">
            <div className="d-flex mb-2">
              <input
                type="search"
                className="form-control"
                ref={searchRef}
                onKeyDown={onKeyDown}
                onChange={onChange}
                value={searchValue}
              />
              <Button onClick={onSearchClick}>Search</Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <Table columns={tableCols} className="mb-0">
                {dataItems.map((dataItem) => (
                  <tr
                    key={dataItem.id()}
                    className="cursor-pointer"
                    onClick={() => navigateTo(dataItem)}
                  >
                    {tableCols.map((e) => (
                      <td key={e.accessor}>
                        {ensureString(dataItem.get(e.accessor))}
                      </td>
                    ))}
                    <td className="visually-hidden visually-hidden-focusable">
                      <LinkTag to={dataItem} />
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>

          <BottomBar>
            <Button
              variant="primary"
              onClick={() => navigateTo(() => organizationAddPage)}
            >
              Add
            </Button>
          </BottomBar>
        </div>
      </>
    )
  },
  { loading: Loading },
)

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

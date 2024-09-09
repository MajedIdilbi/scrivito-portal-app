import { navigateTo, Obj, provideComponent, useDataItem, ClientError } from 'scrivito'
import { DXPCompanyWidget } from './DXPCompanyDetailsWidgetClass'
import { ensureString } from '@/utils/ensureString'
import { BottomBar, Button, Field } from '@justrelate/jr-ui-components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

provideComponent(DXPCompanyWidget, () => {
  const schemaHashMap = useDataItem()?.attributeDefinitions()
  const [editing, setEditing] = useState(false)

  const company = useDataItem()

  const { register, handleSubmit } = useForm()

  const onDeleteClick = () => {
    return company?.delete().catch((error: ClientError) => {
      onError(error)
    }).finally(() => {
      navigateTo(Obj.getByPermalink('organizations-page'))
    })
  }

  const onSubmit = (data: any) => {
    console.log(data)
    return company?.update(data).catch((error: ClientError) => {
      onError(error)
    }).finally(() => {
      setEditing(false)
    })
  }

  const onError = (error: ClientError) => {
    switch(error.httpStatus) {
      case 400:
        window.alert("Bad Request");
        break
      default:
        window.alert("Unexpected Error");
        break
    }
  }

  return (
    <>
      {/* page card header */}
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img className="img-profile cover" src="" />
                    </div>
                    <div className="flex-grow-1 m-auto ms-3">
                      <div className="card-headline">
                        <h3 className="h2 m-0">
                          {ensureString(company?.get('name'))}
                        </h3>
                      </div>
                      <h6 className="mb-0">Title</h6>
                      <span className="text-small text-meta">Subtitle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Details card: left */}
        <div className="col-sm-12 col-md-12 col-lg-5">
          {/* Headline */}
          <div className="card-headline">
            <h6 className="m0">Headline</h6>
            <span className="btn-headline">
              <div className="btn-headline-group ms-auto">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleSubmit(onSubmit)()}
                >
                  Save
                </Button>
                <Button size="sm" onClick={() => {}}>
                  Cancel
                </Button>
              </div>
            </span>
          </div>

          <div className="card mb-3">
            {/* Card body */}
            <div className="card-body readonly-mode">
              {Object.keys(schemaHashMap as object).map((key) => {
                if (editing) {
                  return (
                    <form
                      key={key}
                      className="readonly-mode"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row g-3">
                        <div className="col-lg">
                          <div className="mb-2 col">
                            <Field
                              name={key}
                              label={key}
                              type="text"
                              defaultValue={ensureString(company?.get(key))}
                              register={register}
                              placeholder={key}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  )
                }
                return (
                  <section key={key}>
                    <div className="mb-2">
                      <label className="form-label">{key}</label>
                      <div className="form-control-plaintext hover-edit">
                        {ensureString(company?.get(key))}
                        <i
                          className="jr-icon jr-icon-pen"
                          onClick={() => setEditing(true)}
                        />
                      </div>
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        </div>
        <div className="hidden-xs hidden-sm">
          <br />
        </div>
      </div>

      <div>
        <BottomBar className="jr-bottombar justify-content-between">
          <Button outline variant="danger" onClick={onDeleteClick}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Edit
          </Button>
        </BottomBar>
      </div>
    </>
  )
})

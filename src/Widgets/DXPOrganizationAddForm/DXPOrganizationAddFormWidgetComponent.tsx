import { Obj, LinkTag, provideComponent, navigateTo, ClientError} from 'scrivito'
import { useForm } from 'react-hook-form'
import { pickBy } from 'lodash-es'

import { Button } from '@justrelate/jr-ui-components/Button'

import { Company } from '@/Data/Compnay/CompanyDataClass'

import { DXPOrganizationAddFormWidget } from './DXPOrganizationAddFormWidgetClass'
import { BottomBar } from '@justrelate/jr-ui-components'

provideComponent(DXPOrganizationAddFormWidget, () => {
  const schema = Company.attributeDefinitions()
  const schemaKeys = Object.keys(schema)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: typeof schema) => {
    console.log(data)
    return Company.create(pickBy(data, (att) => att.length > 0)).catch((error: ClientError) => {
      onError(error)
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

  const organizationsPage = Obj.getByPermalink('organizations-page')

  return (
    <>
      {/* Headline */}
      <div className="card-headline mt-3 mb-2">
        <h5 className="m-0">New Organization</h5>
        <div className="btn-headline-group ms-auto">
          <Button
            size="sm"
            variant="primary"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Save
          </Button>
          <Button size="sm">Cancel</Button>
        </div>
      </div>
      {/* Form */}
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className="readonly-mode">
            <div className="row g-3">
              {/* img col */}
              <div className="col-xl-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img className="img-profile cover" alt="person" />
                  </div>
                  <div className="flex-grow-1 m-auto ms-3">
                    <h3 className="h2 m-0 text-muted">New Organization</h3>
                  </div>
                </div>
              </div>

              {/* 2nd col */}
              <div className="col-lg">
                {schemaKeys.map((key, index) => {
                  if (index % 2 === 1) return
                  const type = schema[key] ? schema[key][0] : 'string'
                  return (
                    <div key={key} className="mb-2">
                      <label htmlFor="form-family-name" className="form-label">
                        {key}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={key}
                        {...register(key, {
                          valueAsNumber: type === 'number',
                        })}
                      />
                    </div>
                  )
                })}
              </div>
              <div className="col-lg">
                {schemaKeys.map((key, index) => {
                  if (index % 2 === 0) return
                  const type = schema[key] ? schema[key][0] : 'string'
                  return (
                    <div key={key} className="mb-2">
                      <label htmlFor="form-family-name" className="form-label">
                        {key}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={key}
                        {...register(key, {
                          valueAsNumber: type === 'number',
                        })}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </form>
        </div>
      </div>
      <BottomBar>
        <Button variant="primary" onClick={() => handleSubmit(onSubmit)()}>
          Save
        </Button>
        <Button
          onClick={() => navigateTo(organizationsPage)}
        >
          Cancel
        </Button>
      </BottomBar>
    </>
  )
})

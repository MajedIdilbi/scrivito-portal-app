import { DataClassAttributes } from '../types'
import { pisaCompanyDataClass } from './Pisa/pisaCompanyDataClass'

const attributes: DataClassAttributes = {
  group: 'string',
  branch: 'string',
  region: 'string',
  name: 'string',
  number: 'string',
  status: 'string',
  accountManager: 'string',
  since: 'string',
  occasion: 'string',
  addressStreet: 'string',
  addressPostalCode: 'number',
  addressCity: 'string',
  addressCountry: 'string',
  phone: 'string',
  email: 'string',
  url: 'string',
  description: 'string',
}

export const Company = pisaCompanyDataClass(attributes)

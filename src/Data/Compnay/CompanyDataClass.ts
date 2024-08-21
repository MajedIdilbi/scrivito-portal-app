import { DataClassAttributes } from '../types'
import { pisaTicketDataClass } from './Pisa/pisaCompanyDataClass'

const attributes: DataClassAttributes = {
  name: 'string',
  email: 'string',
  phone: 'string',
}

export const Company = pisaTicketDataClass(attributes)

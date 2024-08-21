import { provideDataClass } from 'scrivito'
import { pisaConfig } from '../../pisaClient'
import { DataClassAttributes } from '../../types'

export function pisaTicketDataClass(attributes: DataClassAttributes) {
  return provideDataClass('company', {
    restApi: 'https://web173.crm.pisasales.de/portal-sales/company',
    attributes,
  })
}

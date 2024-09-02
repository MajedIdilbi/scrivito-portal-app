import { provideDataClass } from 'scrivito'
import { DataClassAttributes } from '../../types'

export function pisaCompanyDataClass(attributes: DataClassAttributes) {
  return provideDataClass('Company', {
    restApi: 'https://web173.crm.pisasales.de/portal-sales/company',
    attributes,
  })
}

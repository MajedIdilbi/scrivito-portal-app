import { provideDataClass } from 'scrivito'
import { DataClassAttributes } from '../../types'

export function pisaSchemaDataClass(attributes: DataClassAttributes) {
  return provideDataClass('Schema', {
    restApi: 'https://web173.crm.pisasales.de/portal-sales/schema',
    attributes,
  })
}

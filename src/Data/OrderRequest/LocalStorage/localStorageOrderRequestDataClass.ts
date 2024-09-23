import { provideLocalStorageDataClass } from '../../../utils/provideLocalStorageDataClass'
import { DataClassAttributes } from '../../types'

const attributes: DataClassAttributes = {
  _id: ['string', { title: 'ID' }],
}

export function localStorageOrderRequestDataClass() {
  return provideLocalStorageDataClass('OrderRequest', { attributes })
}

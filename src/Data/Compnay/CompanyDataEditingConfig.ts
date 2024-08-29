import { provideEditingConfig } from 'scrivito'
import { Company } from './CompanyDataClass'

provideEditingConfig(Company, {
  title: 'Company',
  attributes: {
    _id: { title: 'Company ID' },
    name: { title: 'Name' },
    email: { title: 'Email' },
    phone: { title: 'Phone' },
    group: { title: 'Group' },
    branch: { title: 'Branch' },
    region: { title: 'Region' },
    number: { title: 'Number' },
    status: { title: 'Status' },
    accountManager: { title: 'Account Manager' },
    since: { title: 'Since' },
    occasion: { title: 'Occasion' },
    addressStreet: { title: 'Address Street' },
    addressPostalCode: { title: 'Address Postal Code' },
    addressCity: { title: 'Address City' },
    addressCountry: { title: 'Address Country' },
    url: { title: 'URL' },
    description: { title: 'Description' },
  },
})

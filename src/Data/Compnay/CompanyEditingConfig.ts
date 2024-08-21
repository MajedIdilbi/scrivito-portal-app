import { provideEditingConfig } from 'scrivito'
import { Company } from './CompanyDataClass'

provideEditingConfig(Company, {
  title: 'Company',
  attributes: {
    _id: { title: 'Company ID' },
    name: { title: 'Name' },
    email: { title: 'Email' },
    phone: { title: 'Phone' },
  },
})

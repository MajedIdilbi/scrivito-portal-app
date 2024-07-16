import {
  provideDataValues,
  provideAttributeLocalizers,
} from '../../utils/dataValuesConfig'
import { ContractPromise } from './ContractDataClass'

ContractPromise.then((Contract) => {
  provideDataValues(Contract, {
    category: [
      'PSA_CTR_KND_10',
      'PSA_CTR_KND_20',
      'PSA_CTR_KND_30',
      'PSA_CTR_KND_40',
      'PSA_CTR_KND_50',
      'PSA_CTR_KND_60',
      'PSA_CTR_KND_70',
      'PSA_CTR_KND_80',
      'PSA_CTR_KND_90',
      'PSA_CTR_KND_100',
      'PSA_CTR_KND_110',
      'PSA_CTR_KND_120',
      'PSA_CTR_KND_130',
      'PSA_CTR_KND_140',
      'PSA_CTR_KND_150',
      'PSA_CTR_KND_160',
      'PSA_CTR_KND_170',
    ],
    minimumTermUnit: ['PSA_CTR_CYC_YEA'],
    status: [
      'PSA_PRO_CTR_ACT',
      'PSA_PRO_CTR_CNC',
      'PSA_PRO_CTR_INI',
      'PSA_PRO_CTR_VER',
      'PSA_PRO_CTR_NAC',
      'PSA_PRO_CTR_TPL',
      'PSA_PRO_CTR_QSU',
      'PSA_PRO_CTR_QIN',
      'PSA_PRO_CTR_QSC',
      'PSA_PRO_CTR_QLS',
      'PSA_PRO_CTR_MOD',
    ],
    type: [
      'PSA_CTR_TYP_10',
      'PSA_CTR_TYP_20',
      'PSA_CTR_TYP_30',
      'PSA_CTR_TYP_MAI',
      'PSA_CTR_TYP_SVC',
    ],
  })

  provideAttributeLocalizers('de', Contract, {
    category: {
      PSA_CTR_KND_70: 'Wartungs- und Supportvertrag',
      PSA_CTR_KND_10: 'Kaufvertrag',
      PSA_CTR_KND_20: 'Gesellschaftervertrag',
      PSA_CTR_KND_30: 'Beratervertrag',
      PSA_CTR_KND_40: 'Handelsvertrag',
      PSA_CTR_KND_50: 'Darlehensvertrag',
      PSA_CTR_KND_60: 'Lieferantenvertrag',
      PSA_CTR_KND_80: 'Werksvertrag',
      PSA_CTR_KND_90: 'Versicherungsvertrag',
      PSA_CTR_KND_100: 'Hard- und Softwarevertrag',
      PSA_CTR_KND_110: 'Mietvertrag',
      PSA_CTR_KND_120: 'Pachtvertrag',
      PSA_CTR_KND_130: 'Arbeitsvertrag',
      PSA_CTR_KND_140: 'Lizenzvertrag',
      PSA_CTR_KND_150: 'Leasingvertrag',
      PSA_CTR_KND_160: 'Projektvertrag',
      PSA_CTR_KND_170: 'Partnervertrag',
    },
    minimumTermUnit: { PSA_CTR_CYC_YEA: 'Jahre' },
    status: {
      PSA_PRO_CTR_ACT: 'aktiv',
      PSA_PRO_CTR_CNC: 'storniert',
      PSA_PRO_CTR_INI: 'Vertragsanlage',
      PSA_PRO_CTR_VER: 'abgelegt; auf neue Version kopiert',
      PSA_PRO_CTR_NAC: 'inaktiv',
      PSA_PRO_CTR_TPL: 'Muster',
      PSA_PRO_CTR_QSU: 'Angebot abgegeben',
      PSA_PRO_CTR_QIN: 'Angebotsanlage',
      PSA_PRO_CTR_QSC: 'Angebot erfolgreich',
      PSA_PRO_CTR_QLS: 'Angebot verloren',
      PSA_PRO_CTR_MOD: 'Vertrag geändert',
    },
    type: {
      PSA_CTR_TYP_10: 'Rahmenvertrag',
      PSA_CTR_TYP_20: 'Einzelvertrag',
      PSA_CTR_TYP_30: 'Normaler Vertrag',
      PSA_CTR_TYP_MAI: 'Wartungsvertrag',
      PSA_CTR_TYP_SVC: 'Servicevertrag',
    },
  })

  provideAttributeLocalizers('en', Contract, {
    category: {
      PSA_CTR_KND_10: 'Sales contract',
      PSA_CTR_KND_20: 'Shareholders agreement',
      PSA_CTR_KND_30: 'Consultancy contract',
      PSA_CTR_KND_40: 'Trade agreement',
      PSA_CTR_KND_50: 'Loan contract',
      PSA_CTR_KND_60: 'Supply contract',
      PSA_CTR_KND_70: 'Maintenance & support contract',
      PSA_CTR_KND_80: 'Contract for work and services',
      PSA_CTR_KND_90: 'Insurance contract',
      PSA_CTR_KND_100: 'Hardware & software contract',
      PSA_CTR_KND_110: 'Hiring contract',
      PSA_CTR_KND_120: 'Contract of lease',
      PSA_CTR_KND_130: 'Employment contract',
      PSA_CTR_KND_140: 'License agreement',
      PSA_CTR_KND_150: 'Lease contract',
      PSA_CTR_KND_160: 'Project contract',
      PSA_CTR_KND_170: 'Partner contract',
    },
    minimumTermUnit: { PSA_CTR_CYC_YEA: 'Years' },
    status: {
      PSA_PRO_CTR_ACT: 'active',
      PSA_PRO_CTR_CNC: 'cancelled',
      PSA_PRO_CTR_INI: 'drawn up',
      PSA_PRO_CTR_VER: 'discarded; copied to new version',
      PSA_PRO_CTR_NAC: 'inactive',
      PSA_PRO_CTR_TPL: 'Template',
      PSA_PRO_CTR_QSU: 'quote submitted',
      PSA_PRO_CTR_QIN: 'quote created',
      PSA_PRO_CTR_QSC: 'quote successful',
      PSA_PRO_CTR_QLS: 'quote lost',
      PSA_PRO_CTR_MOD: 'contract modified',
    },
    type: {
      PSA_CTR_TYP_10: 'Basic agreement',
      PSA_CTR_TYP_20: 'Single contract',
      PSA_CTR_TYP_30: 'Normal contract',
      PSA_CTR_TYP_MAI: 'Maintenance contract',
      PSA_CTR_TYP_SVC: 'Service contract',
    },
  })
})
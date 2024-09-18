import { DataClassAttributes } from '../types'
import { pisaSchemaDataClass } from './Pisa/pisaSchemaDataClass'

const attributes: DataClassAttributes = {}

export const Schema = pisaSchemaDataClass(attributes)

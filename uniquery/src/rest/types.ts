import AbstractClient from '../clients/abstractClient'
import { GraphQuery, Or } from '../types'

export type GraphRequest = {
  baseURL: string,
  query: GraphQuery
  path: string
}

export type ClientCall = keyof AbstractClient<any, any>

export type MayString = Or<string, undefined>

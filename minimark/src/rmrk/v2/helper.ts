import { unwrapJSON, unwrapURI } from '../../utils'
import { isValidInteraction } from '../shared/helpers'

import { InteractionV2Type, InteractionV2Value } from './types'
import { InteractionV2 } from './enums'
export const toInteractionV2 = (interaction: string): InteractionV2 => {
  isValidInteraction(interaction)
  return interaction as InteractionV2
}

export const resolveRmrk2Value = (interaction: InteractionV2Type, id: string, restValues: string[]): InteractionV2Value => {
  switch (interaction) {
    case InteractionV2.ACCEPT:
      return {
        id,
        entity_type: restValues[0] as 'RES' | 'NFT',
        entity_id: restValues[1]
      }
    case InteractionV2.BASE:
      return {
        value: unwrapJSON(id)
      }
    case InteractionV2.EQUIP:
      return {
        id,
        baseslot: restValues[0]
      }
    case InteractionV2.EQUIPPABLE:
      return {
        id,
        slot: restValues[0],
        value: restValues[1]
      }
    case InteractionV2.LOCK:
      return {
        id
      }
    case InteractionV2.RESADD:
      return {
        id,
        value: unwrapJSON(restValues[0]),
        replace: restValues[1]
      }
    case InteractionV2.SETPRIORITY:
      return {
        id,
        value: unwrapURI(restValues[0])
      }
    case InteractionV2.SETPROPERTY:
      return {
        id,
        name: unwrapURI(restValues[0]),
        value: unwrapURI(restValues[1])
      }
    case InteractionV2.THEMEADD:
      return {
        base_id: id,
        name: restValues[0],
        value: unwrapJSON(restValues[1])
      }
    case InteractionV2.BUY:
      return {
        id,
        recipient: restValues[0]
      }
    case InteractionV2.EMOTE:
      return {
        namespace: id,
        id: restValues[0],
        emotion: restValues[1]
      }
    case InteractionV2.SEND:
      return {
        id,
        recipient: restValues[0]
      }
    case InteractionV2.LIST:
      return {
        id,
        price: restValues[0]
      }
    case InteractionV2.CHANGEISSUER:
      return {
        id,
        newissuer: restValues[0]
      }
    case InteractionV2.CREATE:
      return {
        value: unwrapJSON(id)
      }
    case InteractionV2.MINT:
      return {
        value: unwrapJSON(id),
        recipient: restValues[0]
      }
    case InteractionV2.BURN:
      return {
        id
      }
  }
}

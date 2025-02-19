import { BatchBlock, SubstrateBlock } from '@subsquid/substrate-processor'
import { camelCase } from 'scule'
import { BaseBlock, BaseCall, BaseContext, EntityConstructor, EntityWithId, IEvent } from './types'

export { camelCase } from 'scule'

export function eventFrom<T>(interaction: T, { blockNumber, caller, timestamp }: BaseCall, meta: string, currentOwner?: string): IEvent<T> {
  return {
    interaction,
    blockNumber: BigInt(blockNumber),
    caller,
    currentOwner: currentOwner ?? caller,
    timestamp,
    meta
  }
}

export function toBaseCall(context: BaseContext): BaseCall {
  const caller = ''
  const { blockNumber, timestamp } = toBaseBlock(context)

  return { caller, blockNumber, timestamp }
}

export function ensure<T>(value: any): T {
  return value as T
}

export function metadataOf({ metadata }: { metadata?: string }): string {
  return metadata ?? ''
}

export function toBaseBlock(context: BatchBlock<any>): BaseBlock;
export function toBaseBlock(context: BaseContext): BaseBlock;
export function toBaseBlock(context: SubstrateBlock): BaseBlock;
export function toBaseBlock(context: BatchBlock<any> | BaseContext | SubstrateBlock): BaseBlock {
  const blockFrom = (): SubstrateBlock => {
    if ('block' in context) {
      return context.block
    }

    if ('header' in context) {
      return context.header
    }
    return context
  }

  const block = blockFrom()
  const blockNumber = block.height.toString()
  const timestamp = new Date(block.timestamp)

  return { blockNumber, timestamp }
}

export function toMap<T extends EntityWithId>(array: T[]): Map<string, T> {
  return new Map(array.map(item => [item.id, item]))
}

export function toEntityId<T extends EntityWithId>(item: T): string {
  return item.id
}

export function toUniqueSet<T extends EntityWithId>(array: T[]): Set<string> {
  return new Set(array.map(toEntityId))
}

export function toEntity<T>(
  entityConstructor: EntityConstructor<T>,
  el: any
): T {
  const entity: T = new entityConstructor()
  for (const prop in el) {
    entity[camelCase(prop) as keyof T] = el[prop]
  }
  return entity
}

export function takeFirst<T>(list: T[]): T | undefined {
  return list.at(0)
}

[libopenmev](README.md)


> TODO


### Enumerations

- [SupportedChainId](#SupportedChainId)

### Classes

- [Url](#Url)

### Variables

- [SUSHIGUARD_RELAY](#sushiguard_relay)

## Variables

### SUSHIGUARD_RELAY

• `Const` **SUSHIGUARD_RELAY**: { [chainId in SupportedChainId]?: string }

#### Defined in

[src/index.ts:71](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L71)
[libopenmev](README.md) / [Exports](../) / SupportedChainId

# Enumeration: SupportedChainId

## Table of contents

### Enumeration members

- [ETHEREUM](SupportedChainId.md#ethereum)

## Enumeration members

### ETHEREUM

• **ETHEREUM** = `1`

#### Defined in

[src/index.ts:10](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L10)
[libopenmev](README.md) / [Exports](../) / Url

# Class: Url

## Hierarchy

- `Connector`

  ↳ **`Url`**

## Table of contents

### Constructors

- [constructor](#Url#constructor)

### Properties

- [actions](#Url#actions)
- [eagerConnection](#Url#eagerconnection)
- [provider](#Url#provider)
- [url](#Url#url)

### Methods

- [activate](#Url#activate)
- [connectEagerly](#Url#connecteagerly)
- [deactivate](#Url#deactivate)
- [isomorphicInitialize](#Url#isomorphicinitialize)

## Constructors

### constructor

• **new Url**(`actions`, `url`, `connectEagerly?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `actions` | `Actions` | `undefined` | - |
| `url` | `url` | `undefined` | An RPC url. |
| `connectEagerly` | `boolean` | `false` | A flag indicating whether connection should be initiated when the class is constructed. |

#### Overrides

Connector.constructor

#### Defined in

[src/index.ts:24](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L24)

## Properties

### actions

• `Protected` `Readonly` **actions**: `Actions`

#### Inherited from

Connector.actions

#### Defined in

node_modules/@disco3/types/dist/index.d.ts:65

___

### eagerConnection

• `Private` `Optional` **eagerConnection**: `Promise`<`void`\>

#### Defined in

[src/index.ts:17](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L17)

___

### provider

• **provider**: `undefined` \| `Eip1193Bridge`

{@inheritdoc Connector. provider}

#### Overrides

Connector.provider

#### Defined in

[src/index.ts:15](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L15)

___

### url

• `Private` **url**: `url`

#### Defined in

[src/index.ts:18](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L18)

## Methods

### activate

▸ **activate**(): `Promise`<`void`\>

{@inheritdoc Connector.activate}

#### Returns

`Promise`<`void`\>

#### Overrides

Connector.activate

#### Defined in

[src/index.ts:49](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L49)

___

### connectEagerly

▸ `Optional` **connectEagerly**(...`args`): `void` \| `Promise`<`void`\>

Attempt to initiate a connection, failing silently

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Returns

`void` \| `Promise`<`void`\>

#### Inherited from

Connector.connectEagerly

#### Defined in

node_modules/@disco3/types/dist/index.d.ts:74

___

### deactivate

▸ **deactivate**(...`args`): `void` \| `Promise`<`void`\>

Initiate a disconnect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Returns

`void` \| `Promise`<`void`\>

#### Inherited from

Connector.deactivate

#### Defined in

node_modules/@disco3/types/dist/index.d.ts:82

___

### isomorphicInitialize

▸ `Private` **isomorphicInitialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/index.ts:36](https://github.com/manifoldfinance/libopenmev/blob/a8915dc/src/index.ts#L36)



## License 

Apache-2.0
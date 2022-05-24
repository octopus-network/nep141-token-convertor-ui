import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ConversionPool = {
  __typename?: 'ConversionPool';
  creator: Scalars['String'];
  deposit_near_amount: Scalars['BigInt'];
  id: Scalars['ID'];
  in_token: Scalars['String'];
  in_token_balance: Scalars['BigInt'];
  in_token_rate: Scalars['Int'];
  out_token: Scalars['String'];
  out_token_balance: Scalars['BigInt'];
  out_token_rate: Scalars['Int'];
  reversible: Scalars['Boolean'];
};

export type ConversionPool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  creator?: InputMaybe<Scalars['String']>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deposit_near_amount?: InputMaybe<Scalars['BigInt']>;
  deposit_near_amount_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_near_amount_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_near_amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_near_amount_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_near_amount_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_near_amount_not?: InputMaybe<Scalars['BigInt']>;
  deposit_near_amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  in_token?: InputMaybe<Scalars['String']>;
  in_token_balance?: InputMaybe<Scalars['BigInt']>;
  in_token_balance_gt?: InputMaybe<Scalars['BigInt']>;
  in_token_balance_gte?: InputMaybe<Scalars['BigInt']>;
  in_token_balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  in_token_balance_lt?: InputMaybe<Scalars['BigInt']>;
  in_token_balance_lte?: InputMaybe<Scalars['BigInt']>;
  in_token_balance_not?: InputMaybe<Scalars['BigInt']>;
  in_token_balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  in_token_contains?: InputMaybe<Scalars['String']>;
  in_token_contains_nocase?: InputMaybe<Scalars['String']>;
  in_token_ends_with?: InputMaybe<Scalars['String']>;
  in_token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  in_token_gt?: InputMaybe<Scalars['String']>;
  in_token_gte?: InputMaybe<Scalars['String']>;
  in_token_in?: InputMaybe<Array<Scalars['String']>>;
  in_token_lt?: InputMaybe<Scalars['String']>;
  in_token_lte?: InputMaybe<Scalars['String']>;
  in_token_not?: InputMaybe<Scalars['String']>;
  in_token_not_contains?: InputMaybe<Scalars['String']>;
  in_token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  in_token_not_ends_with?: InputMaybe<Scalars['String']>;
  in_token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  in_token_not_in?: InputMaybe<Array<Scalars['String']>>;
  in_token_not_starts_with?: InputMaybe<Scalars['String']>;
  in_token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  in_token_rate?: InputMaybe<Scalars['Int']>;
  in_token_rate_gt?: InputMaybe<Scalars['Int']>;
  in_token_rate_gte?: InputMaybe<Scalars['Int']>;
  in_token_rate_in?: InputMaybe<Array<Scalars['Int']>>;
  in_token_rate_lt?: InputMaybe<Scalars['Int']>;
  in_token_rate_lte?: InputMaybe<Scalars['Int']>;
  in_token_rate_not?: InputMaybe<Scalars['Int']>;
  in_token_rate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  in_token_starts_with?: InputMaybe<Scalars['String']>;
  in_token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  out_token?: InputMaybe<Scalars['String']>;
  out_token_balance?: InputMaybe<Scalars['BigInt']>;
  out_token_balance_gt?: InputMaybe<Scalars['BigInt']>;
  out_token_balance_gte?: InputMaybe<Scalars['BigInt']>;
  out_token_balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  out_token_balance_lt?: InputMaybe<Scalars['BigInt']>;
  out_token_balance_lte?: InputMaybe<Scalars['BigInt']>;
  out_token_balance_not?: InputMaybe<Scalars['BigInt']>;
  out_token_balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  out_token_contains?: InputMaybe<Scalars['String']>;
  out_token_contains_nocase?: InputMaybe<Scalars['String']>;
  out_token_ends_with?: InputMaybe<Scalars['String']>;
  out_token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  out_token_gt?: InputMaybe<Scalars['String']>;
  out_token_gte?: InputMaybe<Scalars['String']>;
  out_token_in?: InputMaybe<Array<Scalars['String']>>;
  out_token_lt?: InputMaybe<Scalars['String']>;
  out_token_lte?: InputMaybe<Scalars['String']>;
  out_token_not?: InputMaybe<Scalars['String']>;
  out_token_not_contains?: InputMaybe<Scalars['String']>;
  out_token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  out_token_not_ends_with?: InputMaybe<Scalars['String']>;
  out_token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  out_token_not_in?: InputMaybe<Array<Scalars['String']>>;
  out_token_not_starts_with?: InputMaybe<Scalars['String']>;
  out_token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  out_token_rate?: InputMaybe<Scalars['Int']>;
  out_token_rate_gt?: InputMaybe<Scalars['Int']>;
  out_token_rate_gte?: InputMaybe<Scalars['Int']>;
  out_token_rate_in?: InputMaybe<Array<Scalars['Int']>>;
  out_token_rate_lt?: InputMaybe<Scalars['Int']>;
  out_token_rate_lte?: InputMaybe<Scalars['Int']>;
  out_token_rate_not?: InputMaybe<Scalars['Int']>;
  out_token_rate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  out_token_starts_with?: InputMaybe<Scalars['String']>;
  out_token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reversible?: InputMaybe<Scalars['Boolean']>;
  reversible_in?: InputMaybe<Array<Scalars['Boolean']>>;
  reversible_not?: InputMaybe<Scalars['Boolean']>;
  reversible_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export enum ConversionPool_OrderBy {
  Creator = 'creator',
  DepositNearAmount = 'deposit_near_amount',
  Id = 'id',
  InToken = 'in_token',
  InTokenBalance = 'in_token_balance',
  InTokenRate = 'in_token_rate',
  OutToken = 'out_token',
  OutTokenBalance = 'out_token_balance',
  OutTokenRate = 'out_token_rate',
  Reversible = 'reversible',
}

export type CreatePoolEvent = {
  __typename?: 'CreatePoolEvent';
  create_time: Scalars['String'];
  id: Scalars['ID'];
  pool: ConversionPool;
  signer: Scalars['String'];
};

export type CreatePoolEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  create_time?: InputMaybe<Scalars['String']>;
  create_time_contains?: InputMaybe<Scalars['String']>;
  create_time_contains_nocase?: InputMaybe<Scalars['String']>;
  create_time_ends_with?: InputMaybe<Scalars['String']>;
  create_time_ends_with_nocase?: InputMaybe<Scalars['String']>;
  create_time_gt?: InputMaybe<Scalars['String']>;
  create_time_gte?: InputMaybe<Scalars['String']>;
  create_time_in?: InputMaybe<Array<Scalars['String']>>;
  create_time_lt?: InputMaybe<Scalars['String']>;
  create_time_lte?: InputMaybe<Scalars['String']>;
  create_time_not?: InputMaybe<Scalars['String']>;
  create_time_not_contains?: InputMaybe<Scalars['String']>;
  create_time_not_contains_nocase?: InputMaybe<Scalars['String']>;
  create_time_not_ends_with?: InputMaybe<Scalars['String']>;
  create_time_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  create_time_not_in?: InputMaybe<Array<Scalars['String']>>;
  create_time_not_starts_with?: InputMaybe<Scalars['String']>;
  create_time_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  create_time_starts_with?: InputMaybe<Scalars['String']>;
  create_time_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer?: InputMaybe<Scalars['String']>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CreatePoolEvent_OrderBy {
  CreateTime = 'create_time',
  Id = 'id',
  Pool = 'pool',
  Signer = 'signer',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  conversionPool?: Maybe<ConversionPool>;
  conversionPools: Array<ConversionPool>;
  createPoolEvent?: Maybe<CreatePoolEvent>;
  createPoolEvents: Array<CreatePoolEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryConversionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryConversionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConversionPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConversionPool_Filter>;
};

export type QueryCreatePoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCreatePoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CreatePoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreatePoolEvent_Filter>;
};

export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  conversionPool?: Maybe<ConversionPool>;
  conversionPools: Array<ConversionPool>;
  createPoolEvent?: Maybe<CreatePoolEvent>;
  createPoolEvents: Array<CreatePoolEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionConversionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionConversionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConversionPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConversionPool_Filter>;
};

export type SubscriptionCreatePoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCreatePoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CreatePoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreatePoolEvent_Filter>;
};

export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type Event = {
  __typename?: 'event';
  event: Scalars['String'];
  id: Scalars['ID'];
  msg?: Maybe<Scalars['String']>;
  signer: Scalars['String'];
  time: Scalars['String'];
  token_receiver?: Maybe<Scalars['String']>;
  token_sender?: Maybe<Scalars['String']>;
  transfer_token_amount?: Maybe<Scalars['String']>;
  transfer_token_id?: Maybe<Scalars['String']>;
};

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  event?: InputMaybe<Scalars['String']>;
  event_contains?: InputMaybe<Scalars['String']>;
  event_contains_nocase?: InputMaybe<Scalars['String']>;
  event_ends_with?: InputMaybe<Scalars['String']>;
  event_ends_with_nocase?: InputMaybe<Scalars['String']>;
  event_gt?: InputMaybe<Scalars['String']>;
  event_gte?: InputMaybe<Scalars['String']>;
  event_in?: InputMaybe<Array<Scalars['String']>>;
  event_lt?: InputMaybe<Scalars['String']>;
  event_lte?: InputMaybe<Scalars['String']>;
  event_not?: InputMaybe<Scalars['String']>;
  event_not_contains?: InputMaybe<Scalars['String']>;
  event_not_contains_nocase?: InputMaybe<Scalars['String']>;
  event_not_ends_with?: InputMaybe<Scalars['String']>;
  event_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  event_not_in?: InputMaybe<Array<Scalars['String']>>;
  event_not_starts_with?: InputMaybe<Scalars['String']>;
  event_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  event_starts_with?: InputMaybe<Scalars['String']>;
  event_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  msg?: InputMaybe<Scalars['String']>;
  msg_contains?: InputMaybe<Scalars['String']>;
  msg_contains_nocase?: InputMaybe<Scalars['String']>;
  msg_ends_with?: InputMaybe<Scalars['String']>;
  msg_ends_with_nocase?: InputMaybe<Scalars['String']>;
  msg_gt?: InputMaybe<Scalars['String']>;
  msg_gte?: InputMaybe<Scalars['String']>;
  msg_in?: InputMaybe<Array<Scalars['String']>>;
  msg_lt?: InputMaybe<Scalars['String']>;
  msg_lte?: InputMaybe<Scalars['String']>;
  msg_not?: InputMaybe<Scalars['String']>;
  msg_not_contains?: InputMaybe<Scalars['String']>;
  msg_not_contains_nocase?: InputMaybe<Scalars['String']>;
  msg_not_ends_with?: InputMaybe<Scalars['String']>;
  msg_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  msg_not_in?: InputMaybe<Array<Scalars['String']>>;
  msg_not_starts_with?: InputMaybe<Scalars['String']>;
  msg_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  msg_starts_with?: InputMaybe<Scalars['String']>;
  msg_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer?: InputMaybe<Scalars['String']>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  time_contains?: InputMaybe<Scalars['String']>;
  time_contains_nocase?: InputMaybe<Scalars['String']>;
  time_ends_with?: InputMaybe<Scalars['String']>;
  time_ends_with_nocase?: InputMaybe<Scalars['String']>;
  time_gt?: InputMaybe<Scalars['String']>;
  time_gte?: InputMaybe<Scalars['String']>;
  time_in?: InputMaybe<Array<Scalars['String']>>;
  time_lt?: InputMaybe<Scalars['String']>;
  time_lte?: InputMaybe<Scalars['String']>;
  time_not?: InputMaybe<Scalars['String']>;
  time_not_contains?: InputMaybe<Scalars['String']>;
  time_not_contains_nocase?: InputMaybe<Scalars['String']>;
  time_not_ends_with?: InputMaybe<Scalars['String']>;
  time_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  time_not_in?: InputMaybe<Array<Scalars['String']>>;
  time_not_starts_with?: InputMaybe<Scalars['String']>;
  time_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  time_starts_with?: InputMaybe<Scalars['String']>;
  time_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_receiver?: InputMaybe<Scalars['String']>;
  token_receiver_contains?: InputMaybe<Scalars['String']>;
  token_receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  token_receiver_ends_with?: InputMaybe<Scalars['String']>;
  token_receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_receiver_gt?: InputMaybe<Scalars['String']>;
  token_receiver_gte?: InputMaybe<Scalars['String']>;
  token_receiver_in?: InputMaybe<Array<Scalars['String']>>;
  token_receiver_lt?: InputMaybe<Scalars['String']>;
  token_receiver_lte?: InputMaybe<Scalars['String']>;
  token_receiver_not?: InputMaybe<Scalars['String']>;
  token_receiver_not_contains?: InputMaybe<Scalars['String']>;
  token_receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  token_receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  token_receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_receiver_starts_with?: InputMaybe<Scalars['String']>;
  token_receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_sender?: InputMaybe<Scalars['String']>;
  token_sender_contains?: InputMaybe<Scalars['String']>;
  token_sender_contains_nocase?: InputMaybe<Scalars['String']>;
  token_sender_ends_with?: InputMaybe<Scalars['String']>;
  token_sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_sender_gt?: InputMaybe<Scalars['String']>;
  token_sender_gte?: InputMaybe<Scalars['String']>;
  token_sender_in?: InputMaybe<Array<Scalars['String']>>;
  token_sender_lt?: InputMaybe<Scalars['String']>;
  token_sender_lte?: InputMaybe<Scalars['String']>;
  token_sender_not?: InputMaybe<Scalars['String']>;
  token_sender_not_contains?: InputMaybe<Scalars['String']>;
  token_sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_sender_not_ends_with?: InputMaybe<Scalars['String']>;
  token_sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_sender_not_starts_with?: InputMaybe<Scalars['String']>;
  token_sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_sender_starts_with?: InputMaybe<Scalars['String']>;
  token_sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_amount?: InputMaybe<Scalars['String']>;
  transfer_token_amount_contains?: InputMaybe<Scalars['String']>;
  transfer_token_amount_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_amount_ends_with?: InputMaybe<Scalars['String']>;
  transfer_token_amount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_amount_gt?: InputMaybe<Scalars['String']>;
  transfer_token_amount_gte?: InputMaybe<Scalars['String']>;
  transfer_token_amount_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_token_amount_lt?: InputMaybe<Scalars['String']>;
  transfer_token_amount_lte?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not_contains?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_token_amount_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_token_amount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_amount_starts_with?: InputMaybe<Scalars['String']>;
  transfer_token_amount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_id?: InputMaybe<Scalars['String']>;
  transfer_token_id_contains?: InputMaybe<Scalars['String']>;
  transfer_token_id_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_id_ends_with?: InputMaybe<Scalars['String']>;
  transfer_token_id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_id_gt?: InputMaybe<Scalars['String']>;
  transfer_token_id_gte?: InputMaybe<Scalars['String']>;
  transfer_token_id_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_token_id_lt?: InputMaybe<Scalars['String']>;
  transfer_token_id_lte?: InputMaybe<Scalars['String']>;
  transfer_token_id_not?: InputMaybe<Scalars['String']>;
  transfer_token_id_not_contains?: InputMaybe<Scalars['String']>;
  transfer_token_id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_id_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_token_id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_id_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_token_id_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_token_id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_token_id_starts_with?: InputMaybe<Scalars['String']>;
  transfer_token_id_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Event_OrderBy {
  Event = 'event',
  Id = 'id',
  Msg = 'msg',
  Signer = 'signer',
  Time = 'time',
  TokenReceiver = 'token_receiver',
  TokenSender = 'token_sender',
  TransferTokenAmount = 'transfer_token_amount',
  TransferTokenId = 'transfer_token_id',
}

export type ConversionPoolsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: ConversionPool_OrderBy;
  orderDirection: OrderDirection;
}>;

export type ConversionPoolsQuery = {
  __typename?: 'Query';
  conversionPools: Array<{
    __typename?: 'ConversionPool';
    id: string;
    creator: string;
    in_token: string;
    in_token_balance: any;
    out_token: string;
    out_token_balance: any;
    reversible: boolean;
    out_token_rate: number;
  }>;
};

export const ConversionPoolsDocument = gql`
  query conversionPools(
    $limit: Int!
    $offset: Int!
    $orderBy: ConversionPool_orderBy!
    $orderDirection: OrderDirection!
  ) {
    conversionPools(
      first: $limit
      skip: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      creator
      in_token
      in_token_balance
      out_token
      out_token_balance
      reversible
      out_token_rate
    }
  }
`;

/**
 * __useConversionPoolsQuery__
 *
 * To run a query within a React component, call `useConversionPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversionPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversionPoolsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useConversionPoolsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ConversionPoolsQuery,
    ConversionPoolsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ConversionPoolsQuery, ConversionPoolsQueryVariables>(
    ConversionPoolsDocument,
    options,
  );
}
export function useConversionPoolsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConversionPoolsQuery,
    ConversionPoolsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ConversionPoolsQuery,
    ConversionPoolsQueryVariables
  >(ConversionPoolsDocument, options);
}
export type ConversionPoolsQueryHookResult = ReturnType<
  typeof useConversionPoolsQuery
>;
export type ConversionPoolsLazyQueryHookResult = ReturnType<
  typeof useConversionPoolsLazyQuery
>;
export type ConversionPoolsQueryResult = Apollo.QueryResult<
  ConversionPoolsQuery,
  ConversionPoolsQueryVariables
>;

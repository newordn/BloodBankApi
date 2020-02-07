// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "contact_ASC"
  | "contact_DESC"
  | "whatsapp_ASC"
  | "whatsapp_DESC"
  | "town_ASC"
  | "town_DESC"
  | "city_ASC"
  | "city_DESC"
  | "country_ASC"
  | "country_DESC"
  | "bloodGroup_ASC"
  | "bloodGroup_DESC"
  | "image_ASC"
  | "image_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  contact: String;
  whatsapp: String;
  town: String;
  city: String;
  country: String;
  bloodGroup: String;
  image: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  contact?: Maybe<String>;
  whatsapp?: Maybe<String>;
  town?: Maybe<String>;
  city?: Maybe<String>;
  country?: Maybe<String>;
  bloodGroup?: Maybe<String>;
  image?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  contact?: Maybe<String>;
  whatsapp?: Maybe<String>;
  town?: Maybe<String>;
  city?: Maybe<String>;
  country?: Maybe<String>;
  bloodGroup?: Maybe<String>;
  image?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  contact?: Maybe<String>;
  contact_not?: Maybe<String>;
  contact_in?: Maybe<String[] | String>;
  contact_not_in?: Maybe<String[] | String>;
  contact_lt?: Maybe<String>;
  contact_lte?: Maybe<String>;
  contact_gt?: Maybe<String>;
  contact_gte?: Maybe<String>;
  contact_contains?: Maybe<String>;
  contact_not_contains?: Maybe<String>;
  contact_starts_with?: Maybe<String>;
  contact_not_starts_with?: Maybe<String>;
  contact_ends_with?: Maybe<String>;
  contact_not_ends_with?: Maybe<String>;
  whatsapp?: Maybe<String>;
  whatsapp_not?: Maybe<String>;
  whatsapp_in?: Maybe<String[] | String>;
  whatsapp_not_in?: Maybe<String[] | String>;
  whatsapp_lt?: Maybe<String>;
  whatsapp_lte?: Maybe<String>;
  whatsapp_gt?: Maybe<String>;
  whatsapp_gte?: Maybe<String>;
  whatsapp_contains?: Maybe<String>;
  whatsapp_not_contains?: Maybe<String>;
  whatsapp_starts_with?: Maybe<String>;
  whatsapp_not_starts_with?: Maybe<String>;
  whatsapp_ends_with?: Maybe<String>;
  whatsapp_not_ends_with?: Maybe<String>;
  town?: Maybe<String>;
  town_not?: Maybe<String>;
  town_in?: Maybe<String[] | String>;
  town_not_in?: Maybe<String[] | String>;
  town_lt?: Maybe<String>;
  town_lte?: Maybe<String>;
  town_gt?: Maybe<String>;
  town_gte?: Maybe<String>;
  town_contains?: Maybe<String>;
  town_not_contains?: Maybe<String>;
  town_starts_with?: Maybe<String>;
  town_not_starts_with?: Maybe<String>;
  town_ends_with?: Maybe<String>;
  town_not_ends_with?: Maybe<String>;
  city?: Maybe<String>;
  city_not?: Maybe<String>;
  city_in?: Maybe<String[] | String>;
  city_not_in?: Maybe<String[] | String>;
  city_lt?: Maybe<String>;
  city_lte?: Maybe<String>;
  city_gt?: Maybe<String>;
  city_gte?: Maybe<String>;
  city_contains?: Maybe<String>;
  city_not_contains?: Maybe<String>;
  city_starts_with?: Maybe<String>;
  city_not_starts_with?: Maybe<String>;
  city_ends_with?: Maybe<String>;
  city_not_ends_with?: Maybe<String>;
  country?: Maybe<String>;
  country_not?: Maybe<String>;
  country_in?: Maybe<String[] | String>;
  country_not_in?: Maybe<String[] | String>;
  country_lt?: Maybe<String>;
  country_lte?: Maybe<String>;
  country_gt?: Maybe<String>;
  country_gte?: Maybe<String>;
  country_contains?: Maybe<String>;
  country_not_contains?: Maybe<String>;
  country_starts_with?: Maybe<String>;
  country_not_starts_with?: Maybe<String>;
  country_ends_with?: Maybe<String>;
  country_not_ends_with?: Maybe<String>;
  bloodGroup?: Maybe<String>;
  bloodGroup_not?: Maybe<String>;
  bloodGroup_in?: Maybe<String[] | String>;
  bloodGroup_not_in?: Maybe<String[] | String>;
  bloodGroup_lt?: Maybe<String>;
  bloodGroup_lte?: Maybe<String>;
  bloodGroup_gt?: Maybe<String>;
  bloodGroup_gte?: Maybe<String>;
  bloodGroup_contains?: Maybe<String>;
  bloodGroup_not_contains?: Maybe<String>;
  bloodGroup_starts_with?: Maybe<String>;
  bloodGroup_not_starts_with?: Maybe<String>;
  bloodGroup_ends_with?: Maybe<String>;
  bloodGroup_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  contact?: Maybe<String>;
  whatsapp?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  contact: String;
  whatsapp: String;
  town: String;
  city: String;
  country: String;
  bloodGroup: String;
  image: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  contact: () => Promise<String>;
  whatsapp: () => Promise<String>;
  town: () => Promise<String>;
  city: () => Promise<String>;
  country: () => Promise<String>;
  bloodGroup: () => Promise<String>;
  image: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  contact: () => Promise<AsyncIterator<String>>;
  whatsapp: () => Promise<AsyncIterator<String>>;
  town: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  country: () => Promise<AsyncIterator<String>>;
  bloodGroup: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  contact: String;
  whatsapp: String;
  town: String;
  city: String;
  country: String;
  bloodGroup: String;
  image: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  contact: () => Promise<String>;
  whatsapp: () => Promise<String>;
  town: () => Promise<String>;
  city: () => Promise<String>;
  country: () => Promise<String>;
  bloodGroup: () => Promise<String>;
  image: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  contact: () => Promise<AsyncIterator<String>>;
  whatsapp: () => Promise<AsyncIterator<String>>;
  town: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  country: () => Promise<AsyncIterator<String>>;
  bloodGroup: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  contact: () => Promise<String>;
  whatsapp: () => Promise<String>;
  town: () => Promise<String>;
  city: () => Promise<String>;
  country: () => Promise<String>;
  bloodGroup: () => Promise<String>;
  image: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;

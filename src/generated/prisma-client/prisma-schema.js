module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  contact: String!
  whatsapp: String!
  town: String!
  city: String!
  bloodGroup: String!
  profilPic: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  contact: String!
  whatsapp: String!
  town: String!
  city: String!
  bloodGroup: String!
  profilPic: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  contact_ASC
  contact_DESC
  whatsapp_ASC
  whatsapp_DESC
  town_ASC
  town_DESC
  city_ASC
  city_DESC
  bloodGroup_ASC
  bloodGroup_DESC
  profilPic_ASC
  profilPic_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  contact: String!
  whatsapp: String!
  town: String!
  city: String!
  bloodGroup: String!
  profilPic: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  contact: String
  whatsapp: String
  town: String
  city: String
  bloodGroup: String
  profilPic: String
}

input UserUpdateManyMutationInput {
  name: String
  contact: String
  whatsapp: String
  town: String
  city: String
  bloodGroup: String
  profilPic: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  contact: String
  contact_not: String
  contact_in: [String!]
  contact_not_in: [String!]
  contact_lt: String
  contact_lte: String
  contact_gt: String
  contact_gte: String
  contact_contains: String
  contact_not_contains: String
  contact_starts_with: String
  contact_not_starts_with: String
  contact_ends_with: String
  contact_not_ends_with: String
  whatsapp: String
  whatsapp_not: String
  whatsapp_in: [String!]
  whatsapp_not_in: [String!]
  whatsapp_lt: String
  whatsapp_lte: String
  whatsapp_gt: String
  whatsapp_gte: String
  whatsapp_contains: String
  whatsapp_not_contains: String
  whatsapp_starts_with: String
  whatsapp_not_starts_with: String
  whatsapp_ends_with: String
  whatsapp_not_ends_with: String
  town: String
  town_not: String
  town_in: [String!]
  town_not_in: [String!]
  town_lt: String
  town_lte: String
  town_gt: String
  town_gte: String
  town_contains: String
  town_not_contains: String
  town_starts_with: String
  town_not_starts_with: String
  town_ends_with: String
  town_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  bloodGroup: String
  bloodGroup_not: String
  bloodGroup_in: [String!]
  bloodGroup_not_in: [String!]
  bloodGroup_lt: String
  bloodGroup_lte: String
  bloodGroup_gt: String
  bloodGroup_gte: String
  bloodGroup_contains: String
  bloodGroup_not_contains: String
  bloodGroup_starts_with: String
  bloodGroup_not_starts_with: String
  bloodGroup_ends_with: String
  bloodGroup_not_ends_with: String
  profilPic: String
  profilPic_not: String
  profilPic_in: [String!]
  profilPic_not_in: [String!]
  profilPic_lt: String
  profilPic_lte: String
  profilPic_gt: String
  profilPic_gte: String
  profilPic_contains: String
  profilPic_not_contains: String
  profilPic_starts_with: String
  profilPic_not_starts_with: String
  profilPic_ends_with: String
  profilPic_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  contact: String
  whatsapp: String
}
`
      }
    
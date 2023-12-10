/* tslint:disable */
/* eslint-disable */
// this file is copied from server, make sure it is up to date

import * as APITypes from '../types/graphqlAPI'
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}

export const listItineraries = /* GraphQL */ `query ListItineraries(
  $filter: ModelItineraryFilterInput
  $limit: Int
  $nextToken: String
) {
  listItineraries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        userSub
        givenName
        familyName
        email
        language
        loginWizard
        reminder1
        reminder2
        advanceTime
        interestTags
        itineraries {
          items {
            id
            title
            owner
            createdAt
            updatedAt
            userItinerariesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      title
      owner
      events {
        items {
          id
          eventId
          itinerary {
            id
            title
            owner
            createdAt
            updatedAt
            userItinerariesId
            __typename
          }
          owner
          dateTimes {
            start
            end
            __typename
          }
          createdAt
          updatedAt
          itineraryEventsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userItinerariesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItinerariesQueryVariables,
  APITypes.ListItinerariesQuery
>;

export const userBySub = /* GraphQL */ `query UserBySub(
  $userSub: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  userBySub(
    userSub: $userSub
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userSub
      givenName
      familyName
      email
      language
      loginWizard
      reminder1
      reminder2
      advanceTime
      interestTags
      itineraries {
        items {
          id
          title
          owner
          createdAt
          updatedAt
          userItinerariesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.UserBySubQueryVariables, APITypes.UserBySubQuery>;
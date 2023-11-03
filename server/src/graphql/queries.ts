/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getItinerary = /* GraphQL */ `query GetItinerary($id: ID!) {
  getItinerary(id: $id) {
    id
    user {
      id
      userSub
      givenName
      familyName
      email
      language
      loginWizard
      remaineder1
      remaineder2
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
}
` as GeneratedQuery<
  APITypes.GetItineraryQueryVariables,
  APITypes.GetItineraryQuery
>;
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
        remaineder1
        remaineder2
        advanceTime
        interestTags
        itineraries {
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
          owner
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
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userSub
    givenName
    familyName
    email
    language
    loginWizard
    remaineder1
    remaineder2
    advanceTime
    interestTags
    itineraries {
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
          remaineder1
          remaineder2
          advanceTime
          interestTags
          createdAt
          updatedAt
          __typename
        }
        title
        owner
        events {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userSub
      givenName
      familyName
      email
      language
      loginWizard
      remaineder1
      remaineder2
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
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
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
      remaineder1
      remaineder2
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
export const getUserEvent = /* GraphQL */ `query GetUserEvent($id: ID!) {
  getUserEvent(id: $id) {
    id
    eventId
    itinerary {
      id
      user {
        id
        userSub
        givenName
        familyName
        email
        language
        loginWizard
        remaineder1
        remaineder2
        advanceTime
        interestTags
        itineraries {
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
          owner
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
    owner
    createdAt
    updatedAt
    itineraryEventsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserEventQueryVariables,
  APITypes.GetUserEventQuery
>;
export const listUserEvents = /* GraphQL */ `query ListUserEvents(
  $filter: ModelUserEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      eventId
      itinerary {
        id
        user {
          id
          userSub
          givenName
          familyName
          email
          language
          loginWizard
          remaineder1
          remaineder2
          advanceTime
          interestTags
          createdAt
          updatedAt
          __typename
        }
        title
        owner
        events {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userItinerariesId
        __typename
      }
      owner
      createdAt
      updatedAt
      itineraryEventsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserEventsQueryVariables,
  APITypes.ListUserEventsQuery
>;

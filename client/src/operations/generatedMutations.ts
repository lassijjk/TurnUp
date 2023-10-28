/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/graphqlAPI";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createItinerary = /* GraphQL */ `mutation CreateItinerary(
  $input: CreateItineraryInput!
  $condition: ModelItineraryConditionInput
) {
  createItinerary(input: $input, condition: $condition) {
    id
    user {
      id
      userSub
      givenName
      familyName
      email
      language
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
` as GeneratedMutation<
  APITypes.CreateItineraryMutationVariables,
  APITypes.CreateItineraryMutation
>;
export const updateItinerary = /* GraphQL */ `mutation UpdateItinerary(
  $input: UpdateItineraryInput!
  $condition: ModelItineraryConditionInput
) {
  updateItinerary(input: $input, condition: $condition) {
    id
    user {
      id
      userSub
      givenName
      familyName
      email
      language
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
` as GeneratedMutation<
  APITypes.UpdateItineraryMutationVariables,
  APITypes.UpdateItineraryMutation
>;
export const deleteItinerary = /* GraphQL */ `mutation DeleteItinerary(
  $input: DeleteItineraryInput!
  $condition: ModelItineraryConditionInput
) {
  deleteItinerary(input: $input, condition: $condition) {
    id
    user {
      id
      userSub
      givenName
      familyName
      email
      language
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
` as GeneratedMutation<
  APITypes.DeleteItineraryMutationVariables,
  APITypes.DeleteItineraryMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    userSub
    givenName
    familyName
    email
    language
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    userSub
    givenName
    familyName
    email
    language
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    userSub
    givenName
    familyName
    email
    language
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserEvent = /* GraphQL */ `mutation CreateUserEvent(
  $input: CreateUserEventInput!
  $condition: ModelUserEventConditionInput
) {
  createUserEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserEventMutationVariables,
  APITypes.CreateUserEventMutation
>;
export const updateUserEvent = /* GraphQL */ `mutation UpdateUserEvent(
  $input: UpdateUserEventInput!
  $condition: ModelUserEventConditionInput
) {
  updateUserEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserEventMutationVariables,
  APITypes.UpdateUserEventMutation
>;
export const deleteUserEvent = /* GraphQL */ `mutation DeleteUserEvent(
  $input: DeleteUserEventInput!
  $condition: ModelUserEventConditionInput
) {
  deleteUserEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserEventMutationVariables,
  APITypes.DeleteUserEventMutation
>;

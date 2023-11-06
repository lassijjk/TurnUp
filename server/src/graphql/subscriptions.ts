/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateItinerary = /* GraphQL */ `subscription OnCreateItinerary(
  $filter: ModelSubscriptionItineraryFilterInput
  $owner: String
) {
  onCreateItinerary(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItinerarySubscriptionVariables,
  APITypes.OnCreateItinerarySubscription
>;
export const onUpdateItinerary = /* GraphQL */ `subscription OnUpdateItinerary(
  $filter: ModelSubscriptionItineraryFilterInput
  $owner: String
) {
  onUpdateItinerary(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItinerarySubscriptionVariables,
  APITypes.OnUpdateItinerarySubscription
>;
export const onDeleteItinerary = /* GraphQL */ `subscription OnDeleteItinerary(
  $filter: ModelSubscriptionItineraryFilterInput
  $owner: String
) {
  onDeleteItinerary(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItinerarySubscriptionVariables,
  APITypes.OnDeleteItinerarySubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $userSub: String
) {
  onCreateUser(filter: $filter, userSub: $userSub) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $userSub: String
) {
  onUpdateUser(filter: $filter, userSub: $userSub) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $userSub: String
) {
  onDeleteUser(filter: $filter, userSub: $userSub) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserEvent = /* GraphQL */ `subscription OnCreateUserEvent(
  $filter: ModelSubscriptionUserEventFilterInput
  $owner: String
) {
  onCreateUserEvent(filter: $filter, owner: $owner) {
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
        reminder1
        reminder2
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
` as GeneratedSubscription<
  APITypes.OnCreateUserEventSubscriptionVariables,
  APITypes.OnCreateUserEventSubscription
>;
export const onUpdateUserEvent = /* GraphQL */ `subscription OnUpdateUserEvent(
  $filter: ModelSubscriptionUserEventFilterInput
  $owner: String
) {
  onUpdateUserEvent(filter: $filter, owner: $owner) {
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
        reminder1
        reminder2
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserEventSubscriptionVariables,
  APITypes.OnUpdateUserEventSubscription
>;
export const onDeleteUserEvent = /* GraphQL */ `subscription OnDeleteUserEvent(
  $filter: ModelSubscriptionUserEventFilterInput
  $owner: String
) {
  onDeleteUserEvent(filter: $filter, owner: $owner) {
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
        reminder1
        reminder2
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserEventSubscriptionVariables,
  APITypes.OnDeleteUserEventSubscription
>;

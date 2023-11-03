/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItineraryInput = {
  id?: string | null,
  title: string,
  owner?: string | null,
  userItinerariesId?: string | null,
};

export type ModelItineraryConditionInput = {
  title?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelItineraryConditionInput | null > | null,
  or?: Array< ModelItineraryConditionInput | null > | null,
  not?: ModelItineraryConditionInput | null,
  userItinerariesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Itinerary = {
  __typename: "Itinerary",
  id: string,
  user: User,
  title: string,
  owner?: string | null,
  events?: ModelUserEventConnection | null,
  createdAt: string,
  updatedAt: string,
  userItinerariesId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  userSub?: string | null,
  givenName?: string | null,
  familyName?: string | null,
  email?: string | null,
  language?: string | null,
  loginWizard?: boolean | null,
  remaineder1?: number | null,
  remaineder2?: number | null,
  advanceTime?: number | null,
  interestTags?: Array< string | null > | null,
  itineraries?: ModelItineraryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelItineraryConnection = {
  __typename: "ModelItineraryConnection",
  items:  Array<Itinerary | null >,
  nextToken?: string | null,
};

export type ModelUserEventConnection = {
  __typename: "ModelUserEventConnection",
  items:  Array<UserEvent | null >,
  nextToken?: string | null,
};

export type UserEvent = {
  __typename: "UserEvent",
  id: string,
  eventId: string,
  itinerary: Itinerary,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  itineraryEventsId?: string | null,
};

export type UpdateItineraryInput = {
  id: string,
  title?: string | null,
  owner?: string | null,
  userItinerariesId?: string | null,
};

export type DeleteItineraryInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  userSub?: string | null,
  givenName?: string | null,
  familyName?: string | null,
  email?: string | null,
  language?: string | null,
  loginWizard?: boolean | null,
  remaineder1?: number | null,
  remaineder2?: number | null,
  advanceTime?: number | null,
  interestTags?: Array< string | null > | null,
};

export type ModelUserConditionInput = {
  userSub?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  language?: ModelStringInput | null,
  loginWizard?: ModelBooleanInput | null,
  remaineder1?: ModelIntInput | null,
  remaineder2?: ModelIntInput | null,
  advanceTime?: ModelIntInput | null,
  interestTags?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  userSub?: string | null,
  givenName?: string | null,
  familyName?: string | null,
  email?: string | null,
  language?: string | null,
  loginWizard?: boolean | null,
  remaineder1?: number | null,
  remaineder2?: number | null,
  advanceTime?: number | null,
  interestTags?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserEventInput = {
  id?: string | null,
  eventId: string,
  owner?: string | null,
  itineraryEventsId?: string | null,
};

export type ModelUserEventConditionInput = {
  eventId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserEventConditionInput | null > | null,
  or?: Array< ModelUserEventConditionInput | null > | null,
  not?: ModelUserEventConditionInput | null,
  itineraryEventsId?: ModelIDInput | null,
};

export type UpdateUserEventInput = {
  id: string,
  eventId?: string | null,
  owner?: string | null,
  itineraryEventsId?: string | null,
};

export type DeleteUserEventInput = {
  id: string,
};

export type ModelItineraryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelItineraryFilterInput | null > | null,
  or?: Array< ModelItineraryFilterInput | null > | null,
  not?: ModelItineraryFilterInput | null,
  userItinerariesId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  language?: ModelStringInput | null,
  loginWizard?: ModelBooleanInput | null,
  remaineder1?: ModelIntInput | null,
  remaineder2?: ModelIntInput | null,
  advanceTime?: ModelIntInput | null,
  interestTags?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserEventFilterInput = {
  id?: ModelIDInput | null,
  eventId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserEventFilterInput | null > | null,
  or?: Array< ModelUserEventFilterInput | null > | null,
  not?: ModelUserEventFilterInput | null,
  itineraryEventsId?: ModelIDInput | null,
};

export type ModelSubscriptionItineraryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItineraryFilterInput | null > | null,
  or?: Array< ModelSubscriptionItineraryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  givenName?: ModelSubscriptionStringInput | null,
  familyName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  loginWizard?: ModelSubscriptionBooleanInput | null,
  remaineder1?: ModelSubscriptionIntInput | null,
  remaineder2?: ModelSubscriptionIntInput | null,
  advanceTime?: ModelSubscriptionIntInput | null,
  interestTags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  eventId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserEventFilterInput | null > | null,
};

export type CreateItineraryMutationVariables = {
  input: CreateItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type CreateItineraryMutation = {
  createItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type UpdateItineraryMutationVariables = {
  input: UpdateItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type UpdateItineraryMutation = {
  updateItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type DeleteItineraryMutationVariables = {
  input: DeleteItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type DeleteItineraryMutation = {
  deleteItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserEventMutationVariables = {
  input: CreateUserEventInput,
  condition?: ModelUserEventConditionInput | null,
};

export type CreateUserEventMutation = {
  createUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

export type UpdateUserEventMutationVariables = {
  input: UpdateUserEventInput,
  condition?: ModelUserEventConditionInput | null,
};

export type UpdateUserEventMutation = {
  updateUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

export type DeleteUserEventMutationVariables = {
  input: DeleteUserEventInput,
  condition?: ModelUserEventConditionInput | null,
};

export type DeleteUserEventMutation = {
  deleteUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

export type GetItineraryQueryVariables = {
  id: string,
};

export type GetItineraryQuery = {
  getItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type ListItinerariesQueryVariables = {
  filter?: ModelItineraryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItinerariesQuery = {
  listItineraries?:  {
    __typename: "ModelItineraryConnection",
    items:  Array< {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserBySubQueryVariables = {
  userSub: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserBySubQuery = {
  userBySub?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserEventQueryVariables = {
  id: string,
};

export type GetUserEventQuery = {
  getUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

export type ListUserEventsQueryVariables = {
  filter?: ModelUserEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserEventsQuery = {
  listUserEvents?:  {
    __typename: "ModelUserEventConnection",
    items:  Array< {
      __typename: "UserEvent",
      id: string,
      eventId: string,
      itinerary:  {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      },
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      itineraryEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateItinerarySubscriptionVariables = {
  filter?: ModelSubscriptionItineraryFilterInput | null,
  owner?: string | null,
};

export type OnCreateItinerarySubscription = {
  onCreateItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type OnUpdateItinerarySubscriptionVariables = {
  filter?: ModelSubscriptionItineraryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItinerarySubscription = {
  onUpdateItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type OnDeleteItinerarySubscriptionVariables = {
  filter?: ModelSubscriptionItineraryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItinerarySubscription = {
  onDeleteItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      remaineder1?: number | null,
      remaineder2?: number | null,
      advanceTime?: number | null,
      interestTags?: Array< string | null > | null,
      itineraries?:  {
        __typename: "ModelItineraryConnection",
        items:  Array< {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        },
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        itineraryEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userItinerariesId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  userSub?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  userSub?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  userSub?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userSub?: string | null,
    givenName?: string | null,
    familyName?: string | null,
    email?: string | null,
    language?: string | null,
    loginWizard?: boolean | null,
    remaineder1?: number | null,
    remaineder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          remaineder1?: number | null,
          remaineder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        },
        title: string,
        owner?: string | null,
        events?:  {
          __typename: "ModelUserEventConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        userItinerariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserEventSubscriptionVariables = {
  filter?: ModelSubscriptionUserEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserEventSubscription = {
  onCreateUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

export type OnUpdateUserEventSubscriptionVariables = {
  filter?: ModelSubscriptionUserEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserEventSubscription = {
  onUpdateUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

export type OnDeleteUserEventSubscriptionVariables = {
  filter?: ModelSubscriptionUserEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserEventSubscription = {
  onDeleteUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventId: string,
    itinerary:  {
      __typename: "Itinerary",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        remaineder1?: number | null,
        remaineder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          itineraryEventsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userItinerariesId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
  } | null,
};

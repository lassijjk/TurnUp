/* tslint:disable */
/* eslint-disable */

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
  user?: User | null,
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
  reminder1?: number | null,
  reminder2?: number | null,
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
  itinerary?: Itinerary | null,
  owner?: string | null,
  dateTimes?:  Array<DateTimeObject | null > | null,
  createdAt: string,
  updatedAt: string,
  itineraryEventsId?: string | null,
};

export type DateTimeObject = {
  __typename: "DateTimeObject",
  start?: string | null,
  end?: string | null,
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

export type ModelUserConditionInput = {
  userSub?: ModelStringInput | null,
  givenName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  language?: ModelStringInput | null,
  loginWizard?: ModelBooleanInput | null,
  reminder1?: ModelIntInput | null,
  reminder2?: ModelIntInput | null,
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
  reminder1?: number | null,
  reminder2?: number | null,
  advanceTime?: number | null,
  interestTags?: Array< string | null > | null,
};

export type CreateUserEventInput = {
  id?: string | null,
  eventId: string,
  owner?: string | null,
  dateTimes?: Array< DateTimeObjectInput | null > | null,
  itineraryEventsId?: string | null,
};

export type DateTimeObjectInput = {
  start?: string | null,
  end?: string | null,
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
  dateTimes?: Array< DateTimeObjectInput | null > | null,
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
  reminder1?: ModelIntInput | null,
  reminder2?: ModelIntInput | null,
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

export type CreateItineraryMutationVariables = {
  input: CreateItineraryInput,
  condition?: ModelItineraryConditionInput | null,
};

export type CreateItineraryMutation = {
  createItinerary?:  {
    __typename: "Itinerary",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      reminder1?: number | null,
      reminder2?: number | null,
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
    } | null,
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary?:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null,
        owner?: string | null,
        dateTimes?:  Array< {
          __typename: "DateTimeObject",
          start?: string | null,
          end?: string | null,
        } | null > | null,
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
    user?:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      reminder1?: number | null,
      reminder2?: number | null,
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
    } | null,
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary?:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null,
        owner?: string | null,
        dateTimes?:  Array< {
          __typename: "DateTimeObject",
          start?: string | null,
          end?: string | null,
        } | null > | null,
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
    user?:  {
      __typename: "User",
      id: string,
      userSub?: string | null,
      givenName?: string | null,
      familyName?: string | null,
      email?: string | null,
      language?: string | null,
      loginWizard?: boolean | null,
      reminder1?: number | null,
      reminder2?: number | null,
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
    } | null,
    title: string,
    owner?: string | null,
    events?:  {
      __typename: "ModelUserEventConnection",
      items:  Array< {
        __typename: "UserEvent",
        id: string,
        eventId: string,
        itinerary?:  {
          __typename: "Itinerary",
          id: string,
          title: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          userItinerariesId?: string | null,
        } | null,
        owner?: string | null,
        dateTimes?:  Array< {
          __typename: "DateTimeObject",
          start?: string | null,
          end?: string | null,
        } | null > | null,
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
    reminder1?: number | null,
    reminder2?: number | null,
    advanceTime?: number | null,
    interestTags?: Array< string | null > | null,
    itineraries?:  {
      __typename: "ModelItineraryConnection",
      items:  Array< {
        __typename: "Itinerary",
        id: string,
        user?:  {
          __typename: "User",
          id: string,
          userSub?: string | null,
          givenName?: string | null,
          familyName?: string | null,
          email?: string | null,
          language?: string | null,
          loginWizard?: boolean | null,
          reminder1?: number | null,
          reminder2?: number | null,
          advanceTime?: number | null,
          interestTags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
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
    itinerary?:  {
      __typename: "Itinerary",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        reminder1?: number | null,
        reminder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
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
    } | null,
    owner?: string | null,
    dateTimes?:  Array< {
      __typename: "DateTimeObject",
      start?: string | null,
      end?: string | null,
    } | null > | null,
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
    itinerary?:  {
      __typename: "Itinerary",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        reminder1?: number | null,
        reminder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
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
    } | null,
    owner?: string | null,
    dateTimes?:  Array< {
      __typename: "DateTimeObject",
      start?: string | null,
      end?: string | null,
    } | null > | null,
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
    itinerary?:  {
      __typename: "Itinerary",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        reminder1?: number | null,
        reminder2?: number | null,
        advanceTime?: number | null,
        interestTags?: Array< string | null > | null,
        itineraries?:  {
          __typename: "ModelItineraryConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
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
    } | null,
    owner?: string | null,
    dateTimes?:  Array< {
      __typename: "DateTimeObject",
      start?: string | null,
      end?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    itineraryEventsId?: string | null,
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
      user?:  {
        __typename: "User",
        id: string,
        userSub?: string | null,
        givenName?: string | null,
        familyName?: string | null,
        email?: string | null,
        language?: string | null,
        loginWizard?: boolean | null,
        reminder1?: number | null,
        reminder2?: number | null,
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
      } | null,
      title: string,
      owner?: string | null,
      events?:  {
        __typename: "ModelUserEventConnection",
        items:  Array< {
          __typename: "UserEvent",
          id: string,
          eventId: string,
          itinerary?:  {
            __typename: "Itinerary",
            id: string,
            title: string,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            userItinerariesId?: string | null,
          } | null,
          owner?: string | null,
          dateTimes?:  Array< {
            __typename: "DateTimeObject",
            start?: string | null,
            end?: string | null,
          } | null > | null,
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
      reminder1?: number | null,
      reminder2?: number | null,
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

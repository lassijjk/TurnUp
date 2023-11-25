import { useEffect, useState } from 'react'
import { API, GraphQLQuery } from '@aws-amplify/api'
import * as queries from '../operations/generatedQueries'
import * as mutations from '../operations/generatedMutations'
import {
  UserBySubQuery,
  UpdateUserMutation,
  UpdateUserInput,
  CreateItineraryMutation,
  CreateItineraryInput,
  CreateUserEventMutation,
  CreateUserEventInput,
  ListItinerariesQuery,
  UpdateItineraryInput,
  UpdateItineraryMutation,
  UpdateUserEventInput,
  UpdateUserEventMutation,
  DeleteItineraryInput,
  DeleteItineraryMutation,
  DeleteUserEventInput,
  DeleteUserEventMutation,
} from '../types/graphqlAPI'
import { useAuthUser } from './userHooks'

interface CognitoUser {
  username: string | null
}

export const createItinerary = async (inputData: CreateItineraryInput) => {
  let response: CreateItineraryMutation | string = ''
  try {
    const createdItineraryResponse = await API.graphql<GraphQLQuery<CreateItineraryMutation>>({
      query: mutations.createItinerary,
      variables: {
        input: {
          title: inputData.title,
          userItinerariesId: inputData.userItinerariesId,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = createdItineraryResponse.data as CreateItineraryMutation
  } catch (error) {
    console.log(error)
  }
  return response
}

export const createUserEvent = async (inputData: CreateUserEventInput) => {
  let response: CreateUserEventMutation | string = ''
  try {
    const createdEventResponse = await API.graphql<GraphQLQuery<CreateUserEventMutation>>({
      query: mutations.createUserEvent,
      variables: {
        input: {
          eventId: inputData.eventId,
          itineraryEventsId: inputData.itineraryEventsId
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = createdEventResponse.data as CreateUserEventMutation
  } catch (error) {
    console.log(error)
    response = error as string
  }
  return response
}

export const useGetItineraries = () => {
  const [itineraries, setItineraries] = useState<ListItinerariesQuery | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itineraryListResponse = await API.graphql<GraphQLQuery<ListItinerariesQuery>>({
          query: queries.listItineraries,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
        const itineraryListResult = itineraryListResponse.data as ListItinerariesQuery
        if (!ignore) {
          setItineraries(itineraryListResult)
        }
      } catch (error) {
        console.log('Error fetching itinerary list data', error)
      }
    }

    let ignore = false
    setItineraries(null)
    if (!ignore) {
      fetchData()
    }

    return () => {
      ignore = true
    }
  }, [])

  return itineraries
}

export const useGetUserData = () => {
  const [userData, setUserData] = useState<UserBySubQuery | null>(null)
  const user = useAuthUser() as CognitoUser | null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await API.graphql<GraphQLQuery<UserBySubQuery>>({
          query: queries.userBySub,
          variables: {
            userSub: user?.username,
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
        const userBySubResult = userDataResponse.data as UserBySubQuery
        if (!ignore) {
          setUserData(userBySubResult)
        }
      } catch (error) {
        console.log('Error fetching user data', error)
      }
    }

    let ignore = false
    setUserData(null)
    if (user?.username && !ignore) {
      fetchData()
    }

    return () => {
      ignore = true
    }
  }, [user])

  return userData
}

export const updateUserData = async (inputData: UpdateUserInput) => {
  let response: UpdateUserMutation | string = ''
  try {
    const userDataResponse = await API.graphql<GraphQLQuery<UpdateUserMutation>>({
      query: mutations.updateUser,
      variables: {
        input: {
          id: inputData.id,
          email: inputData.email,
          familyName: inputData.familyName,
          givenName: inputData.givenName,
          language: inputData.language,
          interestTags: inputData.interestTags,
          loginWizard: inputData.loginWizard,
          reminder1: inputData.reminder1,
          reminder2: inputData.reminder2,
          advanceTime: inputData.advanceTime,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = userDataResponse.data as UpdateUserMutation
  } catch (error) {
    console.error('Error updating user data', error)
    response = error as string
  }

  return response
}

export const updateItinerary = async (inputData: UpdateItineraryInput) => {
  let response: UpdateItineraryMutation | string = ''
  try {
    const itineraryResponse = await API.graphql<GraphQLQuery<UpdateItineraryMutation>>({
      query: mutations.updateUserEvent,
      variables: {
        input: {
          id: inputData.id,
          title: inputData.title,
          userItinerariesId: inputData.userItinerariesId,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = itineraryResponse.data as UpdateItineraryMutation
  } catch(error) {
    console.error('Error updating itinerary data ', error)
    response = error as string
  }
  return response
}

export const updateUserEvent = async (inputData: UpdateUserEventInput) => {
  let response: UpdateUserEventMutation | string = ''
  try {
    const userEventResponse = await API.graphql<GraphQLQuery<UpdateUserEventMutation>>({
      query: mutations.updateUserEvent,
      variables: {
        input: {
          id: inputData.id,
          eventId: inputData.eventId,
          dateTimes: inputData.dateTimes,
          itineraryEventsId: inputData.itineraryEventsId,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = userEventResponse.data as UpdateUserEventMutation
  } catch(error) {
    console.error('Error updating userEvent data ', error)
    response = error as string
  }
  return response
}

// Deleting only the itinerary and not userEvents related to it
export const deleteItinerary = async (inputData: DeleteItineraryInput) => {
  let response: DeleteItineraryMutation | string = ''
  try {
    const deleteResponse = await API.graphql<GraphQLQuery<DeleteItineraryMutation>>({
      query: mutations.deleteItinerary,
      variables: {
        input: {
          id: inputData.id,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = deleteResponse.data as DeleteItineraryMutation
  } catch(error) {
    console.error('Error deleting itinerary ', error)
    response = error as string
  }
  return response
}

export const deleteUserEvent = async (inputData: DeleteUserEventInput) => {
  let response: DeleteUserEventMutation | string = ''
  try {
    const deleteResponse = await API.graphql<GraphQLQuery<DeleteUserEventMutation>>({
      query: mutations.deleteUserEvent,
      variables: {
        input: {
          id: inputData.id,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    response = deleteResponse.data as DeleteUserEventMutation
  } catch(error) {
    console.error('Error deleting event ', error)
    response = error as string
  }
  return response
}
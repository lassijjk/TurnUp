import { useEffect, useState } from 'react'
import { API, GraphQLQuery } from '@aws-amplify/api'
import * as queries from '../graphql/generatedQueries'
import * as mutations from '../graphql/generatedMutations'
import { UserBySubQuery, UpdateUserMutation, UpdateUserInput } from '../types/graphqlAPI'

export const useGetUserData = (userSub: string) => {
  const [userData, setUserData] = useState<UserBySubQuery | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await API.graphql<GraphQLQuery<UserBySubQuery>>({
          query: queries.userBySub,
          variables: {
            userSub: userSub,
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        const userBySubResult = userDataResponse.data as UserBySubQuery
        if(!ignore){
          setUserData(userBySubResult)
        }
      } catch (error) {
        console.log('Error fetching user data', error)
      }
    }

    let ignore = false
    setUserData(null)
    if(userSub && !ignore){
      fetchData()
    }

    return () => {
      ignore = true
    }
  }, [userSub])

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
          interestTags: inputData.interestTags
        }
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    response = userDataResponse.data as UpdateUserMutation
  } catch (error) {
    console.error('Error fetching user data', error)
    response = error as string
  }

  return response
}
import { useEffect, useState } from 'react'
import { API, GraphQLQuery } from '@aws-amplify/api'
import * as queries from '../graphql/generatedQueries'
import { UserBySubQuery } from '../types/graphqlAPI'

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
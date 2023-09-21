import awsmobile from './aws-exports'

// Conditionally update the GraphQL endpoint for local development
if (import.meta.env.VITE_LOCAL === 'local') {
  console.log('local')
  awsmobile.aws_appsync_graphqlEndpoint = 'http://localhost:20002/graphql'
}

export default awsmobile

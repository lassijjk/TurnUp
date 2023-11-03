type InterestsPageProps = {
  interests: (string | null)[]
}

const InterestsPage: React.FC<InterestsPageProps> = ({ interests }) => {
  console.log(interests)
  return <h1>Interests Page</h1>
}

export default InterestsPage
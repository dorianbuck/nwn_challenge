import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = ({ item }) => {
  return (
    <Card
      image={item.urlTogImage}
      header={item.title}
      meta={`By: ${item.author} at ${item.source.name}`}
      description={item.description}
      extra={<Header as='h6'>`Published at ${item.publishedAt}`</Header>}
    />
  )
}

export default NewsCard

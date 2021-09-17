import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const NewsCard = (news) => {
  return (
      <button oneclick="NewsCard">
        <Card>
          <Image src={news.image} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{news.name}</Card.Header>
            <Card.Description>{news.description}</Card.Description>
          </Card.Content>
        </Card>
      </button>
  );
}

export default NewsCard

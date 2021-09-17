import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const NewsCard = ({newss}) => {
  return (
        <Card>
          <Image src={newss.image} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{newss.name}</Card.Header>
            <Card.Description>{newss.description}</Card.Description>
          </Card.Content>
        </Card>
  );
}

export default NewsCard

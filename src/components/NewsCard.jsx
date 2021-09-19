import React from "react";
import { Card, Header, Button } from "semantic-ui-react";

const NewsCard = ({ item }) => {
  return (
    <a href={item.url}>
      <Button basic>
        <Card
          data-cy="news-card"
          image={item.urlToImage}
          header={item.title}
          meta={`By: ${item.author} at ${item.source.name}`}
          description={item.description}
          extra={<Header as="h6">Published at {item.publishedAt}</Header>}
        />
      </Button>
    </a>
  );
};

export default NewsCard;

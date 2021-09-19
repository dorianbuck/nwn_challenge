import React from "react";
import { Card, Header } from "semantic-ui-react";

const NewsCard = ({ item }) => {
  return (
    <a href={item.url}>
      <button onClick="NewsCard">
        <Card
          data-cy="news-card"
          image={item.urlToImage}
          header={item.title}
          meta={`By: ${item.author} at ${item.source.name}`}
          description={item.description}
          extra={<Header as="h6">Published at {item.publishedAt}</Header>}
        />
      </button>
    </a>
  );
};

export default NewsCard;

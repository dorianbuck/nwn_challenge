import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { Container, Grid } from "semantic-ui-react";

const NewsHeadline = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("./data/newsHeadlines.json").then((response) => {
      setNews(response.data);
    });
  }, []);

  let newsList = news.map((news) => {
    return (
      <div id={`news-${news.id}`} key={news.id}>
        <NewsCard news={news} />
      </div>
    );
  });
  return (
    <Container>
      <Grid>{newsList}</Grid>
    </Container>
  );
};

export default NewsHeadline;  
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { Container, Grid } from "semantic-ui-react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("./data/news.json").then((response) => {
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
      <h1 id="news-header">My News</h1>
      <Grid>{newsList}</Grid>
    </Container>
  );
};

export default News;  
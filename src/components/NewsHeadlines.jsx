// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import NewsCard from "./NewsCard";
// import { Container, Grid } from "semantic-ui-react";

// const NewsHeadline = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios.get("./data/newsHeadlines.json").then((response) => {
//       setNews(response.data);
//       console.log(news)
//     });
//   }, []);

  
//   let newsList = news.map((newss) => {
//     return (
//       <div id={`new-${newss.id}`} key={newss.id}>
//         <NewsCard newss={newss} />
//       </div>
//     );
//   });
  
//   debugger
  
//   return (
//     <Container>
//       <Grid>{newsList}</Grid>
//     </Container>
//   );
// };

// export default NewsHeadline;  
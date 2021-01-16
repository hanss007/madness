const News = () => (
  <div>
    <h1>miejsce na newsy</h1>
  </div>
);

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/news`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}

export default News;

// import Navbar from "../components/Navbar";
// import Card from "../components/News/Card";
// import { news } from "../data/dataNews";
// import GlobalStyle from "../theme/GlobalStyle";
// import styled from "styled-components";

// const WrapperStyled = styled.div`
//   position: relative;

//   &:after {
//     content: "";
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80");
//     background-size: cover;

//     width: 100%;
//     height: 110%;
//     opacity: 0.3;
//     z-index: -1;
//   }
// `;

// const News = () => (
//   <>
//     <GlobalStyle />

//     <Navbar />
//     <WrapperStyled>
//       {news.map((item) => (
//         <Card
//           id={item.id}
//           type={item.type}
//           data={item.data}
//           title={item.title}
//           excerpt={item.excerpt}
//           imageNews={item.imageNews}
//         />
//       ))}
//     </WrapperStyled>
//   </>
// );

// export default News;

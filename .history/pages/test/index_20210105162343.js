import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import generateData from "./data";
import Slider from "./slider";
import { theme, Box, Heading } from "@react-yuki/ui";
import { globalStyles } from "./styles";

import "swiper/css/swiper.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            React Id Swiper DEMO
          </Heading>
          <Heading
            my={4}
            textAlign="center"
            color="blue.4"
            as="h3"
            fontWeight={2}
          >
            Please reproduce your issues here!!!!
          </Heading>
        </Box>
        <Box>
          <Slider items={generateData()} />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

import React from "react";

export default ({ color, content }) => (
  <Flex
    maxHeight="20rem"
    alignItems="center"
    justifyContent="center"
    color="white"
    className="swiper-slide"
    bg={color}
  >
    <Text textAlign="center" fontSize={6}>
      {content}
    </Text>
  </Flex>
);

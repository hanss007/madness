import React from "react";
import { news } from "../data/dataNews";

const DetailsTemplate = () => (
  <div>
    <h1>{title}</h1>
    <img src={imageNews} alt="" />
    <p>{content}</p>
  </div>
);

export default DetailsTemplate;

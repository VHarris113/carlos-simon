import React, {useState} from "react";
import "./style.css";
// import { Carousel } from "bootstrap";
import {data} from "./data";

const Thoughts = () => 
  const [current, setCurrent] = useState(0)
  const length = data.length

    return (
        <section className="slider">
          {data.map((data, index) => {
            return <p className="quotes">{data.quote} {data.person}</p>;
          })}
        <section/>
    );
}

export default Thoughts;

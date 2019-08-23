import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getColors()
  },[])


   const getColors = _ => {
     axiosWithAuth()
       .get('http://localhost:5000/api/colors')
     .then(res => {
       console.log(res)
       setColorList(res.data)
     })
     .catch(err => console.error('there was an error', err.response))
   }
  console.log(colorList)

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

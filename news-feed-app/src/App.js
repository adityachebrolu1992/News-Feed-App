import './App.css';
import CardList from './CardList';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import FullData from './ReadMore';
import React, { useState } from 'react';

const news = [
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
  {
    name: "Main Heading",
    abstract: "abtract data...",
    FullData: "all data"
  },
]

let arr = [];

fetch("https://jsonplaceholder.typicode.com/posts").then((e) => e.json()).then((fetchedData) => {
  for (let i = 0; i < fetchedData.length; i++) {
    let temp = {
      name: fetchedData[i].id,
      abstract: fetchedData[i].title,
      FullData: fetchedData[i].body
    }

    arr.push(temp)
  }
}).catch((e) => console.log("error==", e))



function App() {

  const [flag, setFlag] = useState(true);
  const [tempData, setTempData] = useState({ name: "raja", FullInfo: "info" })
  function callBack(name, FullInfo) {

    const info = { "name": name, "FullInfo": FullInfo }
    setTempData(info);

    setFlag(false);

  }


  function defaultVal() {
    setFlag(true);
  }

  return (
    <div onLoad={defaultVal} className="App">

      <header><h1><p id="main-heading">News Feed App</p></h1></header>

      {flag ? (<CardList info={news} callBack={callBack} />) : (<FullData fullInformation={tempData} setFlag={setFlag} />)}
    </div>
  );
}

export default App;

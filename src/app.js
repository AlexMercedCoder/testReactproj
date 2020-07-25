import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import {Fetcher} from './components/Fetcher.js'
import "./css/style.css";

const App = (props) => {

  //PROPS AND OTHER NON-STATE
  const { myTitle, cheese } = props;
  const myArr = [1,2,3,4,5,6]
  
  // STATE
  const [state, setState] = React.useState({ name: "Alex Merced", age: 34 });
  const [formData, setFormData] = React.useState({ name: "", age: 0 });

  //FUNCTIONS

  const clickHandler = (event) => {
    setState({ ...state, age: 35 });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formClickHandler = (event) => {
    setState({ ...formData });
  };

  return (
    <>
      <Header />
      <h1>{myTitle}</h1>
      <h2>{cheese}</h2>
      <h3>{state.name}</h3>
      <h4>{state.age}</h4>
      <button onClick={clickHandler} className="button">
        Click Me
      </button>
      <div>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
        <button className="button" onClick={formClickHandler}>submit</button>
      </div>
      <ul>
          {myArr.map(num => (<li>{num}</li>))}
      </ul>

      <Fetcher/>

      <Footer />
    </>
  );
};

const target = document.getElementById("app");
ReactDOM.render(<App myTitle="Hello" cheese="gouda" />, target);

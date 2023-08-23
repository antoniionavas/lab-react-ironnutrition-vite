import { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <hr/>

      {/* <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        } } 
      /> */}

      <FoodList/>

    </div>
  );
}

export default App;

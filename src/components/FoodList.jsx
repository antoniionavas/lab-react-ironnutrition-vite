import { useState } from "react";
import foodsJson from "../foods.json"
import FoodBox  from "../components/FoodBox"
import AddFoodForm from "../components/AddFoodForm";
import Search from "./Search";


function FoodList() {

    const [foodList, setFoodlist] = useState(foodsJson)
    const [foodListRender, setFoodListRender] = useState(foodList)

  return (
    <div>
          <Search foodListRender={foodListRender} setFoodListRender={setFoodListRender}/>
            <br/>
          <AddFoodForm foodList={foodList} setFoodlist={setFoodlist} setFoodListRender={setFoodListRender}/>

            {foodList.map((food, index) => {
            return (<FoodBox key={index} food={food} foodList={foodList} setFoodlist={setFoodlist} setFoodListRender={setFoodListRender}/>)
            })}
    </div>
  )
}

export default FoodList

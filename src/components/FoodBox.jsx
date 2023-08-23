// Your code here

function FoodBox(food) {
    console.log(food)
    const {name, calories, servings, image, id} = food.food

    const caloriasTotal = calories * servings;

    const handleDeleteFood = (id) => {
     console.log("intento de borrado")
     
    let foodArr = food.foodList.filter((food) => {
        if (food.id === id){
            return true
        } else {
            return false
        }
    })

     food.setFoodlist(foodArr)
     food.setFoodListRender(foodArr)
    }

  return (
    <div>
        <p>{name}</p>

        <img src={image} width={200}/>

        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>

        <p>
            <b>Total Calories: {caloriasTotal} </b> kcal
        </p>
        <button onClick={() => handleDeleteFood(id)}>Delete</button>
    </div>
  )
}

export default FoodBox



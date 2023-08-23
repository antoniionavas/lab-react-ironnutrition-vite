// Your code here
import { useState } from "react";

function AddFoodForm(food) {

    const [ nameInput, setNameInput ] = useState("");
    const [ imageInput, setImageInput ] = useState("");
    const [ caloriesInput, setCaloriesInput ] = useState(0);
    const [ servingsInput, setServingsInput ] = useState(0);

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNameInput(event.target.value)
    }
    
    const handleImageChange = (event) => {
        console.log(event.target.value)
        setImageInput(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        console.log(event.target.value)
        setCaloriesInput(event.target.value)
    }

    const handleServingsChange = (event) => {
        console.log(event.target.value)
        setServingsInput(event.target.value)
    }  
    
    const handleSubmitForm = (event, ) => {
        console.log("creando un producto")
        event.preventDefault() // => prevenir cualquier comportamiento normal del formulario

        let newFood = {
           name: nameInput,
           image: imageInput,
           calories: caloriesInput,
           servings: servingsInput
        }

        let clone = JSON.parse(JSON.stringify(food.foodList))
        clone.unshift(newFood)

        console.log("intentando crear: ", newFood)

        food.setFoodlist(clone)
        food.setFoodListRender(clone)

        setNameInput("");
        setImageInput("");
        setCaloriesInput(0);
        setServingsInput(0)

        // event.target.reset()
    }


  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={nameInput} onChange={handleNameChange}/>

            <br/>
            <br/>
            <br/>

            <label htmlFor='image'>Image</label>
            <input type='text' name='image' value={imageInput} onChange={handleImageChange}/>

            <br/>
            <br/>
            <br/>

            <label htmlFor='calories'>Calories</label>
            <input type='number' name='calories' value={caloriesInput} onChange={handleCaloriesChange}/>

            <br/>
            <br/>
            <br/>

            <label htmlFor='servings'>Servings</label>
            <input type='number' name='servings' value={servingsInput} onChange={handleServingsChange}/>

            <br/>
            <br/>
            <br/>

            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm
import { useState } from "react"

function Search(food) {

    const [queryInput, setQueryInput] = useState("")

    const handleSearchFood = (event) => {
        console.log(event.target.value)
        setQueryInput(event.target.value)

        const filterFoodArr = food.foodList.filter((eachFood) => {
            if (eachFood.name.startsWith(event.target.value) === true) {
              return true
            } else {
              return false
            }
        })
        console.log(filterFoodArr)
        setFoodListRender(filterFoodArr)
    }

  return (
    <div>
        <form>
            <label htmlFor="query">Search</label>
            <input type="text" name="query" value={queryInput} onChange={handleSearchFood}/>
        </form>
    </div>
  )
}

export default Search
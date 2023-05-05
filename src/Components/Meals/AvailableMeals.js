import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react"



const AvailableMeals = () => {

/*get data */
const [mealsData, setMealsData] = useState([])

useEffect(() => {
  const fetchMeals = async() => {
   const res = await fetch("https://connectdb-1efa3-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
   const responseData = await res.json()
   const loadedData = []
   for (const key in responseData) {
    loadedData.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price

    })
   }
   setMealsData(loadedData)
  }
 fetchMeals()
}, [])

    const mealsList = mealsData.map((meal) => {
        return (
               <MealItem 
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
               >{meal.name}</MealItem>
        )

    })

    return (
        <section className={classes.meals}>
        
              
              <ul>
                <Card>
                {mealsList}
                </Card>
              </ul>
          
        </section>
    )
}
export default AvailableMeals;
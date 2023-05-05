import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";


const DUMMY_MEALS = [
      {
        id: 'm1',
        name: 'Sushi Bowl',
        description: 'Finest fresh fish and vegetables',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Chickpea and Lentil Dahl',
        description: 'Spicy and nutritious',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'BBQ Burger',
        description: 'An American meat beast',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Green Olive Salad',
        description: 'Healthy...and green...',
        price: 18.99,
      },
    ];

const AvailableMeals = async() => {


    const mealsList = {}.map((meal) => {
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
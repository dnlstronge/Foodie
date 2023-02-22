import classes from "./AvailableMeals.module.css"


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

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return (
            <li>{meal.name}</li>
        )

    })

    return (
        <section className={classes.meals}>
            <ul>
               {mealsList}
            </ul>
        </section>
    )
}
export default AvailableMeals;
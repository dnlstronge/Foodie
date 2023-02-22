import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return ( 
        <section className={classes.summary}>
            <h2>Delicious Food Delievered Daily</h2>
            <p>Choose your favourites from our wide selection of Tasty Treats!</p>
            <p>Made with love, the finest of ingredients and the best locally sourced produce. Tasty Treats are
            prepared fresh and onsite each morning by our experienced chefs! </p>
        </section>
    )
}

export default MealsSummary;

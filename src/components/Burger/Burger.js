import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(ingredientName => {
        return [...Array(props.ingredients[ingredientName])].map((_, i) => {
            return <BurgerIngredient key={ingredientName + i} type={ingredientName} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);


    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
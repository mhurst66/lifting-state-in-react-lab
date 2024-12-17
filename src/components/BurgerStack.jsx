import { useState } from "react"
import { availableIngredients } from "../App"

const BurgerStack = (props) => {
    // const removeFromBurger = (oldIngredient) => {
    //     // add the old ingredient to the available ingredients
    //     console.log([...ingredientList, oldIngredient])
    //     setIngredientList([...ingredientList, oldIngredient])
    
    //     // remove the ingredient from burger stack
    //     console.log(stack.filter((_, i) => i !== oldIngredient))
    //     setStack(stack.filter((_, i) => i !== oldIngredient))
    
    // }
    return (
        <ul>
            {props.burgerStack.map((ingredient, index) => {
                return <li key={index} style={{color: ingredient.color}}>{ingredient.name}<button onClick={() => props.removeFromBurger(index)}>-</button></li>
            })}
        </ul>
    )
}

export default BurgerStack
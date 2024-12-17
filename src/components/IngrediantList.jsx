import { useState } from "react"
import { availableIngredients } from "../App"

const IngredientList = (props) => {

    // const addToBurger = (newIngredient) => {
    //     // remove the ingredient from available ingredients
    //     console.log(ingredientList.filter((_, i) => i !== newIngredient))
    //     setIngredientList(ingredientList.filter((_, i) => i !== newIngredient))
    
    //     // add the new ingredient to the burger
    //     console.log([...stack, newIngredient])
    //     setStack([...stack, newIngredient])
    // }
    

    return (
        <ul>
            {props.ingredientList.map((ingredient, index) => {
                return <li key={index} style={{color: ingredient.color}}>{ingredient.name}<button onClick={() => props.addToBurger(index)}>+</button></li>
            })}
        </ul>
    )
}

export default IngredientList
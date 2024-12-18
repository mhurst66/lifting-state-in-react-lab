import { useState } from "react"
import { availableIngredients } from "../App"

const IngredientList = (props) => {

    return (
        <ul>
            {props.ingredientList.map((ingredient, index) => {
                return <li key={index} style={{color: ingredient.color}}>{ingredient.name}<button onClick={() => props.addToBurger(index)}>+</button></li>
            })}
        </ul>
    )
}

export default IngredientList
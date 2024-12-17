import { useState } from "react"
import { availableIngredients } from "../App"

const IngredientList = (props) => {
    return (
        <ul>
            console.log(props)
            {props.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
            <button onClick={() => addToBurger(index)}>+</button>
        </ul>
    )
}

export default IngredientList
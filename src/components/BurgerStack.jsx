import { useState } from "react"

const BurgerStack = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
            <button onClick={() => removeFromBurger(index)}>-</button>
        </ul>
    )
}

export default BurgerStack
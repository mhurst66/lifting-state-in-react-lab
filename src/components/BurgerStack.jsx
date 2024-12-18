
const BurgerStack = (props) => {

    return (
        <ul>
            {props.burgerStack.map((ingredient, index) => {
                return <li key={index} style={{color: ingredient.color}}>{ingredient.name}<button onClick={() => props.removeFromBurger(index)}>-</button></li>
            })}
        </ul>
    )
}

export default BurgerStack
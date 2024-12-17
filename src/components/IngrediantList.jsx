
const IngredientList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
        </ul>
    )
}

export default IngredientList
import { useState } from 'react'
import './App.css'
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngrediantList'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
]

const App = () => {
  const [ingredientList, setIngredientList] = useState(availableIngredients)

  const [stack, setStack] = useState([])

  const addToBurger = (newIngredient) => {
    // remove the ingredient from available ingredients
    console.log(ingredientList.filter((_, i) => i !== newIngredient))
    setIngredientList(ingredientList.filter((_, i) => i !== newIngredient))

    // add the new ingredient to the burger
    console.log([...stack, newIngredient])
    setStack([...stack, newIngredient])
  }

  const removeFromBurger = (oldIngredient) => {
    // add the old ingredient to the available ingredients
    console.log([...ingredientList, oldIngredient])
    setIngredientList([...ingredientList, oldIngredient])

    // remove the ingredient from burger stack
    console.log(stack.filter((_, i) => i !== oldIngredient))
    setStack(stack.filter((_, i) => i !== oldIngredient))
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      <IngredientList addToBurger={addToBurger}/>
      <BurgerStack removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  )
}

export default App

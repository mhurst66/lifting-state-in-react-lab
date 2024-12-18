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

  const [burgerStack, setBurgerStack] = useState([])

  const addToBurger = (newIngredient) => {
    // chosen ingredient
    console.log(newIngredient)
    // remove choosen ingredient from available list
    console.log((ingredientList.filter(ingredient => ingredient !== newIngredient)))
    setIngredientList(ingredientList.filter(ingredient => ingredient !== newIngredient))
    
    // add the new ingredient to the burger
    setBurgerStack([...burgerStack, newIngredient])
    console.log([...burgerStack, newIngredient])
  }

  const removeFromBurger = (oldIngredient) => {
    // chosen ingredient
    console.log(oldIngredient)
    // remove the ingredient from burger stack
    setBurgerStack(burgerStack.filter((_, i) => i !== oldIngredient))
    console.log(burgerStack.filter((_, i) => i !== oldIngredient))

    // add the old ingredient to the available ingredients
    console.log([...ingredientList, oldIngredient])
    setIngredientList([...ingredientList, oldIngredient])
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      <IngredientList 
        availableIngredients={availableIngredients} 
        ingredientList={ingredientList} 
        burgerStack={burgerStack} 
        addToBurger={addToBurger} 
      />
      <BurgerStack 
        availableIngredients={availableIngredients} 
        burgerStack={burgerStack} 
        ingredientList={ingredientList} 
        removeFromBurger={removeFromBurger} 
      />
      </section>
    </main>
  )
}

export default App

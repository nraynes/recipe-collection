import './App.css';
import TopBar from './components/top-bar/TopBar'
import SideBar from './components/side-bar/SideBar'
// import CurrentRecipe from './components/current-recipe/CurrentRecipe'
import React, { useContext, useEffect, useState} from 'react';
import NewRecipe from './components/new-recipe/NewRecipe'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [initialRecipes, setInitialRecipes] = useState()
  const [shownRecipeList, setShownRecipeList] = useState(initialRecipes)
  console.log(shownRecipeList)
  useEffect(() => {
    fetch ('http://localhost:3000/recipes')
      .then((data) => data.json())
      .then((data) => {
        setInitialRecipes(data.recipes)
      })
  }, [setInitialRecipes])
  
  return (
    <>
      <header>
        <TopBar/>
        <Route path='/newRecipe' component={props => <NewRecipe {...props}/>}></Route>
      </header>
      
      <div className='mainPage'>
        <Switch>
        <SideBar recipeList={shownRecipeList} recipeInit={initialRecipes} setRecipeList={(newList) => setShownRecipeList(newList)} />
        {/* <CurrentRecipe/> */}
        </Switch>
      </div>
    </>
  );
};
export default App;

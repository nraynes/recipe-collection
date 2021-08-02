import './App.css';
import TopBar from './components/top-bar/TopBar'
import SideBar from './components/side-bar/SideBar'
import CurrentRecipe from './components/current-recipe/CurrentRecipe'
import React, { useEffect, useState} from 'react';
import NewRecipe from './components/new-recipe/NewRecipe'
import { Route } from 'react-router-dom'

const App = (props) => {
  const [initialRecipes, setInitialRecipes] = useState();
  const [newRecipe, setNewRecipe] = useState(false);

  function renderRecipeForm() {
      if (newRecipe) {
          return (
              <NewRecipe setNewRecipe={(value) => {setNewRecipe(value)}} setInitialRecipes={(value) => setInitialRecipes(value)} />
          )
      }
  }

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((data) => data.json())
      .then((data) => {
        setInitialRecipes(data.recipes)
      })
  }, [setInitialRecipes])


  return (
    <div className='App'>
      <header>
        <TopBar newRecipe={newRecipe} setNewRecipe={(value) => {setNewRecipe(value)}} setInitialRecipes={(value) => setInitialRecipes(value)}/>
        {renderRecipeForm()}
      </header>
      
      <div className='mainPage'>
        <div id='sideBarContainer'>
          <SideBar recipeInit={initialRecipes} />
        </div>
        <div id='curRecipeContainer'>
          <Route path={`/:name`} children={({match}) => {
            if (match) {
              let retVal = [];
              if (initialRecipes) {
                for (let i=0;i<initialRecipes.length;i++) {
                  if (initialRecipes[i].name.toLowerCase() === match.params.name.toLowerCase()) {
                    retVal.push(initialRecipes[i])
                  }
                }
              }
              if (Array.isArray(retVal)) {
                return (<CurrentRecipe recipe={retVal[0]} />)
              }
            }
            return null;
          }}></Route>
        </div>
      </div>
    </div>
  );
};
export default App;
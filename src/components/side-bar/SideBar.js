/* eslint-disable array-callback-return */
import './SideBar.css'
import Recipe from './recipe/recipe'
import React, { useRef } from 'react';

const SideBar = (props) => {
    let  { recipeInit, recipeList, setRecipeList} = props
    const searcher = useRef()
    return (
        <div className='sideBar'>
          <label for='search'>Search</label>
          <input ref={searcher} onChange={(e) => {
              e.preventDefault()
              let newRecipeArr = [];
              recipeInit.map((recipe) => {
                if (recipe.name.match(searcher.current.value)) {
                    newRecipeArr.push(recipe)
                }
                setRecipeList(newRecipeArr)
              })
          }} type='text' id='search' name='search'></input>
        <div>
            
        </div>
          {recipeList ? recipeList.map((recipe, index) => {
              return (
                  <Recipe key={index} name={recipe.name}/>
              )
          }) : null}
        </div>
    );
};


export default SideBar;
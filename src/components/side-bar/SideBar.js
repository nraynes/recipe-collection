/* eslint-disable array-callback-return */
import './SideBar.css'
import Recipe from './recipe/recipe'
import React, { useEffect, useRef, useState  } from 'react';

const SideBar = (props) => {
    const [shownRecipeList, setShownRecipeList] = useState()

    useEffect(() => {
      setShownRecipeList(props.recipeInit)
    }, [props.recipeInit])

    const searcher = useRef()
    return (
        <div className='sideBar'>
          <div id='filterBar'>
            <label for='search'>Search:</label>
            <input ref={searcher} onChange={(e) => {
                e.preventDefault()
                let newRecipeArr = [];
                props.recipeInit.map((recipe) => {
                  if (recipe.name.toLowerCase().match(searcher.current.value.toLowerCase())) {
                      newRecipeArr.push(recipe)
                  }
                  setShownRecipeList(newRecipeArr);
                })
            }} type='text' id='search' name='search'></input>
          </div>
          <div id='recipeList'>
            {shownRecipeList ? shownRecipeList.map((recipe, index) => {
                return (
                    <Recipe key={index} name={recipe.name}/>
                )
            }) : null}
          </div>
        </div>
    );
};


export default SideBar;
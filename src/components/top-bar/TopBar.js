import './TopBar.css'
import React from 'react'
import NewRecipe from '../new-recipe/NewRecipe'
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <nav id='nav-bar'>
            <h1>Recipe App</h1>
            <Link to='/newRecipe'><button>New Recipe</button></Link>
        </nav>
    );
};

export default TopBar;
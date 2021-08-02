import './TopBar.css';
import React from 'react';

const TopBar = (props) => {
    const { newRecipe, setNewRecipe } = props;
    return (
        <nav>
            <h1>Recipe App</h1>
            <button onClick={() => {
                setNewRecipe(!newRecipe)
            }}>New Recipe</button>
        </nav>
    );
};

export default TopBar;
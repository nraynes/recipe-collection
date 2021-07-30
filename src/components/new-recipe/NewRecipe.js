import './NewRecipe.css';

const NewRecipe = (props) => {
    return (
        <form name='New Recipe'>
            <label for='recipeName'>Recipe Name:</label>
            <input id='recipeName' type='text'></input>
            <label for='ingredients'>Ingredients:</label>
            <input id='ingredients' type='text'></input>
            <label for='recipeSteps'>Recipe Steps:</label>
            <input id='recipeSteps' type='text'></input>
            <button>Cancel</button>
            <button>Add</button>
        </form>
    );
};

export default NewRecipe;
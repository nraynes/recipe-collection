import './NewRecipe.css';
import { useRef } from 'react';

const NewRecipe = (props) => {
    const nameRef = useRef()
    const ingRef = useRef()
    const stepsRef = useRef()
    return (
        <div className='newRecipeContainer'>
            <form name='New Recipe'>
                <div id='nameForm'>
                    <label for='recipeName'>Recipe Name:</label>
                    <input ref={nameRef} id='recipeName' type='text'></input>
                </div>
                <div id='ingForm'>
                    <label for='ingredients'>Ingredients:</label>
                    <textarea ref={ingRef} id='ingredients'></textarea>
                </div>
                <div id='stepsForm'>
                    <label for='recipeSteps'>Recipe Steps:</label>
                    <textarea ref={stepsRef} id='recipeSteps'></textarea>
                </div>
                <div id='btnContainer'>
                    <button onClick={() => {
                        props.setNewRecipe(false)
                    }}>Cancel</button>
                    <button id='addBtn' name='Add' onClick={(e) => {
                        e.preventDefault()
                        const objRecipe = {
                            name: nameRef.current.value,
                            ingredients: ingRef.current.value.split('\n'), 
                            steps: stepsRef.current.value.split('\n')
                        }
                        nameRef.current.value = '';
                        ingRef.current.value = '';
                        stepsRef.current.value = '';
                        fetch ('http://localhost:3000/setRecipes', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(objRecipe)
                        })
                            .then((data) => data.json())
                            .then((data) => {
                                props.setInitialRecipes(data.recipes)
                            })
                    }}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default NewRecipe;
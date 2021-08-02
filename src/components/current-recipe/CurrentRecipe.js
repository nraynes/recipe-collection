import './CurrentRecipe.css'
import StepsList from './steps-list/StepsList'
import IngredientSidebar from './ingredient-sidebar/IngredientSidebar'

const CurrentRecipe = (props) => {
    if (props.recipe) {
        return (
            <div className='CurrentRecipe'>
                <StepsList name={props.recipe.name} steps={props.recipe.steps} />
                <IngredientSidebar ingredients={props.recipe.ingredients} />
            </div>
        )
    } else {
        return (
            <div className='CurrentRecipe'>
            </div>
        )
    }
}

export default CurrentRecipe;
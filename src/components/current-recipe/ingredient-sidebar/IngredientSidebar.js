import './IngredientSidebar.css';

const IngredientSidebar = (props) => {
    return (
        <div id='ingContainer'>
            {props.ingredients ? props.ingredients.map((item) => {
                return (<div id='ing'>{item}</div>)
            }) : null}
        </div>
    );
};

export default IngredientSidebar;
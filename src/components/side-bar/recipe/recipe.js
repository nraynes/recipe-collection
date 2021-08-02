import './recipe.css'
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    return (
      <Link to={`/${props.name}`} name='recipe'><div id='recipe'><p>{props.name}</p></div></Link>
    )
}

export default Recipe;
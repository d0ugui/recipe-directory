import { Link } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

import Delete from '../../assets/delete.svg';

import "./styles.css";

export function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }

  function handleClick(id) {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Delete}
            onClick={() => handleClick(recipe.id)}
            alt="delete"
          />
        </div>
      ))}
    </div>
  );
}

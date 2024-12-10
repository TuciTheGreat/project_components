
const RecipeItem = ({ recipe }) => (
  <article>
    <h2>{recipe.name}</h2>
    <h3>Ingredients:</h3>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h3>Instructions:</h3>
    <p>{recipe.instructions}</p>
  </article>
);

export default RecipeItem;


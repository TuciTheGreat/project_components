import RecipeItem from "./RecipeList/RecipeItem";

const RecipeList = ({ recipes }) => (
  <div>
    {recipes.map((recipe) => (
      <RecipeItem key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;

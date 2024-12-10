import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

const App = () => {
  const recipes = [
    {
      id: 1,
      name: "Chicken Curry",
      ingredients: [
        "Chicken",
        "Onion",
        "Garlic",
        "Ginger",
        "Curry Powder",
        "Coconut Milk",
      ],
      instructions:
        "Sauté onion, garlic, and ginger. Add chicken and curry powder, then pour in coconut milk. Simmer until cooked.",
    },
    {
      id: 2,
      name: "Vegetable Stir-Fry",
      ingredients: [
        "Broccoli",
        "Carrots",
        "Bell Peppers",
        "Soy Sauce",
        "Garlic",
        "Sesame Oil",
      ],
      instructions:
        "Heat sesame oil, add garlic and vegetables, stir-fry, and finish with soy sauce.",
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      ingredients: [
        "Flour",
        "Sugar",
        "Brown Sugar",
        "Butter",
        "Eggs",
        "Chocolate Chips",
      ],
      instructions:
        "Mix dry ingredients, add wet ingredients, fold in chocolate chips, and bake at 180°C until golden.",
    },
  ];

  return (
    <div>
      <Header />
      <Main recipes={recipes} />
      <Footer />
    </div>
  );
};

export default App;



import recipes from "../../data/recipes.js"

// Récupération des données : ingrédients,...

export function getIngredients() {
    const arrayIngredients = [];

    recipes.forEach((element) => {
        const ingredients = element.ingredients
        ingredients.forEach((ingredient) => {
            arrayIngredients.push(ingredient.ingredient)
        })
        return arrayIngredients
    })
    return arrayIngredients
}

export function displayIngredients() {
    const buttonIngredients = document.querySelector('.search_ingredients');
    const main = document.querySelector(".main")
    buttonIngredients.addEventListener('click', () => {
      const containerIngredients = document.createElement("ul");
      containerIngredients.classList.add("listIngredients")
      const ingredients = getIngredients();
      ingredients.forEach((list) => {
        const listDom = document.createElement("li");
        listDom.textContent = list;
        containerIngredients.appendChild(listDom);
      });
      main.appendChild(containerIngredients)
    });
  }
  
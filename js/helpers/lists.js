import recipes from "../../data/recipes.js";

function getSearchesInputs() {
  const searchInput1 = document.querySelector(".search_input_1");
  const searchInput2 = document.querySelector(".search_input_2");
  const searchInput3 = document.querySelector(".search_input_3");

  const ingredientsList = document.querySelector(".ingredients_list");
  const appliancesList = document.querySelector(".appliances_list");
  const ustensilsList = document.querySelector(".ustensils_list");

  const search1 = searchInput1.value.toLowerCase();
  console.log(searchInput2, "----", searchInput2.value);
  const search2 = searchInput2.value.toLowerCase();
  const search3 = searchInput3.value.toLowerCase();

  ingredientsList.innerHTML = "";
  appliancesList.innerHTML = "";
  ustensilsList.innerHTML = "";

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const ingredientName = ingredient.ingredient.toLowerCase();
      if (ingredientName.includes(search1)) {
        const ingredientsLi = document.createElement("li");
        ingredientsLi.textContent = ingredientName;
        ingredientsList.appendChild(ingredientsLi);
      }
    });
  });

  recipes.forEach((recipe) => {
    const applianceName = recipe.appliance.toLowerCase();
    if (applianceName.includes(search2)) {
      const appliancesLi = document.createElement("li");
      appliancesLi.textContent = applianceName;
      appliancesList.appendChild(appliancesLi);
    }
  });

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      const ustensilName = ustensil.toLowerCase();
      if (ustensilName.includes(search3)) {
        const ustensilsLi = document.createElement("li");
        ustensilsLi.textContent = ustensilName;
        ustensilsList.appendChild(ustensilsLi);
      }
    });
  });
}


export function listDom(containerButton, buttonValue, containerClass, array, classList) {
  const main = document.querySelector(containerButton);
  const button = document.querySelector(buttonValue);
  const containerUl = document.createElement("ul");
  containerUl.classList.add(containerClass);

  button.addEventListener("click", () => {
    const inputLi1 = '<input class="search_input_1" />';
    containerUl.innerHTML = inputLi1;

    array.forEach((element) => {
      const list = document.createElement("li");
      list.classList.add(classList);
      list.textContent = element;
      list.classList.add("capitalize");
      containerUl.appendChild(list);
    });

    const searchInputSelectors = [".search_input_1", ".search_input_2", ".search_input_3"];

    // Loop through the array and add the event listener to each element
    searchInputSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener("input", getSearchesInputs);
      });
    });
    });
  main.appendChild(containerUl);
}


// Function to sort elements of an array in ascending order
export function sortLists(array) {
  const arraySort = array.slice().sort();
  return arraySort;
}

// Function to remove duplicate elements from an array
export function deleteDuplicate(array) {
  const arrayUnique = Array.from(new Set(array));
  return arrayUnique;
}

// Function to convert all elements of an array to lowercase strings
export function lowercaseLists(array) {
  const lowercaseArray = array.map((word) => word.toLowerCase());
  return lowercaseArray;
}

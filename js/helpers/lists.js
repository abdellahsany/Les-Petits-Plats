// IMPORT RECIPES
import recipes from "../../data/recipes.js";

// GET INGREDIENTS INPUT
function getIngredientsInput() {
  const searchInput1 = document.querySelector("#search_ingredients");
  const ingredientsList = document.querySelector(".ingredients_list");
  const search1 = searchInput1.value.toLowerCase();

  ingredientsList.innerHTML = "";

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const ingredientsName = ingredient.ingredient.toLowerCase();
      if (ingredientsName.includes(search1)) {
        const ingredientsLi = document.createElement("li");
        ingredientsLi.textContent = ingredientsName;
        ingredientsList.appendChild(ingredientsLi);
      }
    });
  });
}

// GET APPLIANCES INPUT
function getAppliancesInput() {
  const searchInput2 = document.querySelector("#search_appliances");
  const appliancesList = document.querySelector(".appliances_list");
  const search2 = searchInput2.value.toLowerCase();

  appliancesList.innerHTML = "";

  recipes.forEach((recipe) => {
    const appliancesName = recipe.appliance.toLowerCase();
    if (appliancesName.includes(search2)) {
      const appliancesLi = document.createElement("li");
      appliancesLi.textContent = appliancesName;
      appliancesList.appendChild(appliancesLi);
    }
  });
}

// GET UTENSILS INPUT
function getUstensilsInput() {
  const searchUstensilsInput = document.querySelector("#search_ustensils");
  console.log(searchUstensilsInput, "searchUstensilsInput");
  const ustensilsList = document.querySelector(".ustensils_list");
  console.log(ustensilsList, "ustensilsList");
  const searchUstensilsValue = searchUstensilsInput.value.toLowerCase();
console.log(searchUstensilsValue, "searchUstensilsValue");

  ustensilsList.innerHTML = "";

  recipes.forEach((recipe) => {
    console.log(recipe.ustensils, "recipe.ustensils");
    recipe.ustensils.forEach((element)=>{
    if (element.includes(searchUstensilsValue)) {
    const ustensilsLi = document.createElement("li");
    ustensilsLi.textContent = searchUstensilsValue;
    ustensilsList.appendChild(ustensilsLi);
    }
    });
    // if (ustensilsName.includes(searchUstensilsValue)) {
    //   // const ustensilsLi = document.createElement("li");
    //   // ustensilsLi.textContent = ustensilsName;
    //   // ustensilsList.appendChild(ustensilsLi);
    // }
  });
}
getUstensilsInput();

// LIST DOM
export function listDom(
  containerButton,
  buttonValue,
  containerClass,
  array,
  classList
) {
  const main = document.querySelector(containerButton);
  const button = document.querySelector(buttonValue);
  const wrapper = document.createElement("div");
  const containerUl = document.createElement("ul");
  containerUl.classList.add(containerClass);

  let isInputCreated = false;
  let isListCreated = false;
  let inputLi1;

  button.addEventListener("click", (e) => {
    const selectedList = button.id;

    if (!isInputCreated) {
      inputLi1 = document.createElement("input");
      inputLi1.setAttribute("type", "search");
      wrapper.appendChild(inputLi1);
      isInputCreated = true;
    }

    if (!isListCreated) {
      array.forEach((element) => {
        const list = document.createElement("li");
        list.classList.add(classList);
        list.textContent = element;
        list.classList.add("capitalize");
        containerUl.appendChild(list);
      });

      isListCreated = true;

      wrapper.appendChild(containerUl);
    }

    // const mapper = {
    //   getIngredientsInput,
    //   getAppliancesInput,
    //   getUstensilsInput,
    // };
    // const input = document.querySelector("input");
    // input.addEventListener("input", mapper[selectedList]);
  });

  main.appendChild(wrapper);
}

// SORT LISTS
export function sortLists(array) {
  const arraySort = array.slice().sort();
  return arraySort;
}

// DELETE DUPLICATE
export function deleteDuplicate(array) {
  const arrayUnique = Array.from(new Set(array));
  return arrayUnique;
}

// LOWERCASE LISTS
export function lowercaseLists(array) {
  const lowercaseArray = array.map((word) => word.toLowerCase());
  return lowercaseArray;
}

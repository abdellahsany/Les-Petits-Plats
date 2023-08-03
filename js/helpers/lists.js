import recipes from "../../data/recipes.js";

function getIngredientsInput() {
  const searchInput1 = document.querySelector(".search_ingredients");
  const ingredientsList = document.querySelector(".ingredients_list");
  const search1 = searchInput1.value.toLowerCase();

  ingredientsList.innerHTML = "";

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
    const ingredientsName = ingredient.ingredient.toLowerCase();
    if (ingredientsName.includes(search1)) {
      const ingredientsLi = document.createElement("li");
      ingredientsLi.textContent = ingredientsName;
      ingredientsName.appendChild(ingredientsLi);
    }
  });
});
}
function getAppliancesInput() {
  const searchInput2 = document.querySelector(".search_appliances");
  const appliancesList = document.querySelector(".appliances_list");
  const search2 = searchInput2.value.toLowerCase();

  appliancesList.innerHTML = "";

  recipes.forEach((recipe) => {
    const appliancesName = recipe.appliance.toLowerCase();
    if (appliancesName.includes(search2)) {
      const appliancesLi = document.createElement("li");
      appliancesLi.textContent = appliancesName;
      appliancesName.appendChild(appliancesLi);
    }
  });
}

function getUstensilsInput() {
  const searchInput3 = document.querySelector(".search_ustensils");
  const ustensilsList = document.querySelector(".ustensils_list");
  const search3 = searchInput3.value.toLowerCase();

  ustensilsList.innerHTML = "";

  recipes.forEach((recipe) => {
      const ustensilsName = recipe.ustensils.toLowerCase();
      if (ustensilsName.includes(search3)) {
        const ustensilsLi = document.createElement("li");
        ustensilsLi.textContent = ustensilsName;
        ustensilsName.appendChild(ustensilsLi);
      }
    });
}

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
  

  button.addEventListener("click", (e) => {
    const selectedList = button.id;
    const inputLi1 = document.createElement("input");
    console.log(wrapper);
    wrapper.appendChild(inputLi1);
    wrapper.appendChild(containerUl);

    array.forEach((element) => {
      const list = document.createElement("li");
      list.classList.add(classList);
      list.textContent = element;
      list.classList.add("capitalize");
      containerUl.appendChild(list);
    });

    const mapper = {
      ingredients_btn: getIngredientsInput,
      appliance_btn: getAppliancesInput,
      ustensils_btn: getUstensilsInput,
    };
    // Loop through the array and add the event listener to each element
    const input = document.querySelector("input");
    console.log(input);
    input.addEventListener("input", mapper[selectedList]); // mapper.ingredients_btn
  });
  main.appendChild(wrapper);
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
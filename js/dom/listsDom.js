import recipes from "../../data/recipes.js";
import { deleteDuplicate, lowercaseList, listDom, sortLists } from "../helpers/lists.js"

export function getIngredients() {
  const arrayIngredients = [];
  recipes.forEach((element) => {
    const ingredients = element.ingredients;
    ingredients.forEach((ingredient) => {
      arrayIngredients.push(ingredient.ingredient);
    });
  });
  return arrayIngredients;
}


export function displayIngredients() {
  const ingredients = getIngredients();

  const sortIngredients = sortLists(ingredients);
  const uniqueIngredients = deleteDuplicate(sortIngredients);

  listDom(".main", ".search_ingredients", "listIngredients", uniqueIngredients);
}

export function getAppliance() {
  const arrayAppliance = []; // On créer un tableau vide sans donées, puis on va push les donnés à l'intérieure de ce tableau
  recipes.forEach((element) => {
    arrayAppliance.push(element.appliance);
  })
  return arrayAppliance
}

export function displayAppliance() {
  const appliance = getAppliance();
  const sortAppliance = sortLists(appliance);
  const uniqueAppliance = deleteDuplicate(sortAppliance);

  listDom("main", ".search_appliance", "listAppliance", uniqueAppliance)
}

export function getUstensils() {
  const arrayUstensils = [];
  recipes.forEach((element) => {
   element.ustensils.forEach((ustensil) => {
    arrayUstensils.push(ustensil);
   })
  })
 return arrayUstensils
}

export function displayUstensils() {
  const ustensils = getUstensils();
  const sortUstensils = sortLists(ustensils);
  const lowerUstensils =  lowercaseList(sortUstensils);
  const uniqueUstensils = deleteDuplicate(lowerUstensils);
  listDom("main", ".search_ustensils", "listUstensils", uniqueUstensils)
}

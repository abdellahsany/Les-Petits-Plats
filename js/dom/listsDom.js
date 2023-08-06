import recipes from "../../data/recipes.js";
import { deleteDuplicate, lowercaseLists, listDom, sortLists } from "../helpers/lists.js"

export function getIngredients() {
  const arrayIngredients = [];
  recipes.forEach((element) => {
    const ingredients = element.ingredients;
    ingredients.forEach((ingredient) => {
      arrayIngredients.push(ingredient.ingredient.toLowerCase())
    });
  });
  return arrayIngredients;
}

export function displayIngredients() {
  const ingredients = getIngredients();
  const sortIngredients = sortLists(ingredients);
  const uniqueIngredient = deleteDuplicate(sortIngredients);

  listDom(".container_ingredients", "#search_ingredients", "ingredients_list", uniqueIngredient, "list");
}

export function getAppliance() {
  const arrayAppliance = []; // On créer un tableau vide sans donées, puis on va push les donnés à l'intérieure de ce tableau
  recipes.forEach((element) => {
    arrayAppliance.push(element.appliance.toLowerCase())
  })
  return arrayAppliance
}

export function displayAppliance() {
  const appliance = getAppliance();
  const sortAppliance = sortLists(appliance);
  const uniqueAppliance = deleteDuplicate(sortAppliance);

  listDom(".container_appliance", "#search_appliances", "appliances_list", uniqueAppliance, "list");
}

export function getUstensils() {
  const arrayUstensils = [];
  recipes.forEach((element) => {
   element.ustensils.forEach((ustensil) => {
    arrayUstensils.push(ustensil.toLowerCase());
   })
  })
 return arrayUstensils
}

export function displayUstensils() {
  const ustensils = getUstensils();
  const sortUstensils = sortLists(ustensils);
  const lowerUstensils =  lowercaseLists(sortUstensils);
  const uniqueUstensil = deleteDuplicate(lowerUstensils);
  listDom(".container_ustensils", "#search_ustensils", "ustensils_list", uniqueUstensil, "list");
}


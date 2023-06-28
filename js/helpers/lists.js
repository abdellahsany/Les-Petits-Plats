// Sort elements in an array
export function sortLists(array) {
  const arraySort = array.sort();
  return arraySort;
}


// Delete duplicate elements in an array
export function deleteDuplicate(array) {
  const arrayUnique = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });

  return arrayUnique;

}

export function lowercaseList(array) {
  const lowercaseArray = array.map((word) => word.toLowerCase());
  console.log(lowercaseArray);
  return lowercaseArray;
}


// Create a list of elements
export function listDom(containerButton,buttonValue,classContainer,array) {
  const main = document.querySelector(containerButton);

  const button = document.querySelector(buttonValue);

  button.addEventListener("click", () => {
    const container = document.createElement("ul");
    container.classList.add(classContainer);
    array.forEach((element) => {
      const list = document.createElement("li");
      list.textContent = element;
      container.appendChild(list);
    });
    main.appendChild(container);
  });
}




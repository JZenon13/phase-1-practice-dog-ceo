const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then((response) => response.json())
  .then((breeds) =>
    breeds.message.forEach((dogImage) => renderImage(dogImage))
  );

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then((response) => response.json())
  .then((breedObject) => {
    dogBreedsArr = Object.keys(breedObject.message);
    renderBreeds(dogBreedsArr);
  }); //object.keys enables you to isolate the key
//DOM selectors
const dogImgContainer = document.getElementById("dog-image-container");
const dogBreedsUl = document.getElementById("dog-breeds");
const dropDown = document.getElementById("breed-dropdown");
//add eventListeners

//render functions

//callback functions
function renderImage(dogImage) {
  const dogImg = document.createElement("img");
  dogImg.src = dogImage; //you only need to set it to 'dogImage' because it is already filtered through as a singular image
  dogImgContainer.append(dogImg); //remember parent child relationship. once you have the content defined you can append
}

function renderBreeds(dogBreedsArr) {
  dogBreedsArr.forEach((breed) => {
    let li = document.createElement("li"); //use for each to get each element attached to an li
    li.textContent = breed;
    document.getElementById("dog-breeds").append(li);
  });
  document.addEventListener("click", changeColor); //makes a function that changes the color of every item in the list

  function changeColor(e) {
    e.target.style.color = "red"; //changes the li to "color"
  }

  dropDown.addEventListener("change", changeList); //for forms or dropdowns...addEventListener directly
  function changeList(e) {
    const letter = e.target.value; //this will give you the value of the input
    filteredBreeds = dogBreedsArr.filter((breed) => breed.startsWith(letter));
    dogBreedsUl.innerHTML = ""; //this removes the unfiltered breeds from the page
    renderBreeds(filteredBreeds);
  }
}

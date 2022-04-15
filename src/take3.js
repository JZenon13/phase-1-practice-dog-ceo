// ## Challenge 1

// This repository includes an `index.html` file that loads an `index.js` file.

// ```js
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// ```

// Add JavaScript that:

// - on page load, fetches the images using the url above ⬆️
// - parses the response as `JSON`
// - adds image elements to the DOM **for each** 🤔 image in the array

// ---

// ## Challenge 2

// ```js
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// ```

// After the first challenge is completed, add JavaScript that:

// - on page load, fetches all the dog breeds using the url above ⬆️
// - adds the breeds to the page in the `<ul>` provided in `index.html`

// ---

// ## Challenge 3

// Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// the user clicks on any one of the `<li>`s, the font color of that `<li>`
// changes. This can be a color of your choosing.

// ---

// ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.

// ---

// ![dog ceo](https://dog.ceo/img/dog.jpg)
/////////////////////////////////////////////////////////////////
//challenge1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then((response) => response.json())
  .then((data) => {
    data.message.forEach((img) => renderImg(img));
  });

function renderImg(img) {
  let imgContainer = document.querySelector("#dog-image-container");
  let imgTag = document.createElement("img");
  imgTag.src = img;
  imgContainer.append(imgTag);
}
//////////////////////////////////////////////////////////////////////////////////////
// challenge 2&3
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then((response) => response.json())
  .then((obj) => {
    breedArray = Object.keys(obj.message);
    renderBreeds(breedArray);
  });
const dogDiv = document.querySelector("#dog-breeds");
function renderBreeds(breedArray) {
  breedArray.forEach((breed) => {
    let li = document.createElement("li");

    li.textContent = breed;
    dogDiv.append(li);
    document.addEventListener("click", addColor);
  });
}
function addColor(e) {
  e.target.style.color = "teal";
}

////////////////////////////////////////////////////////////////////////////////
//challenge 4

const dropDown = document.querySelector("#breed-dropdown");
dropDown.addEventListener("change", sortBreed);

function sortBreed(e) {
  const letter = e.target.value;
  let filteredBreeds = breedArray.filter((breed) => breed.startsWith(letter));
  dogDiv.innerHTML = "";
  renderBreeds(filteredBreeds);
}

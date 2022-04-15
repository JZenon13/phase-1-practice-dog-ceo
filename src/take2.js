document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(imgUrl)
    .then((response) => response.json())
    //data is an object so we get into it with dot notation
    .then((data) => data.message.forEach((dogImage) => renderImage(dogImage)));
  fetch(breedUrl)
    .then((response) => response.json())
    //data is an object containing objects so 'Object.keys{}'
    .then((data) => (breeds = Object.keys(data.message)));
});
//DOM selectors
const dropDown = document.querySelector("#breed-dropdown");
const ul = document.querySelector("#dog-breeds");

//Add eventlistners
dropDown;
function renderImage(dogImage) {
  const container = document.getElementById("dog-image-container");
  const img = document.createElement("img");

  img.src = dogImage;
  container.append(img);
}

function renderBreeds(breeds) {
  breeds.forEach((breed) => {
    let li = document.createElement("li");
    li.textContent = breed;
    ul.append(li);
    li.addEventListener("click", changeColor);
  });
}

// calllbacks
function changeColor(e) {
  e.target.style.color = "red";
}

function handleChange(e) {
  const letter = e.target.value;
  filteredBreeds = breeds.filter((breed) => breed.startsWith(letter));
  renderBreeds(filteredBreeds);
}

// console.log("%c HI", "color: firebrick");
// const imgContainer = document.getElementById("dog-image-container");
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// const dogContainer = document.getElementById("dog-breeds");
// const breedUrl = "https://dog.ceo/api/breeds/list/all";

// function getImages() {
//   fetch(imgUrl)
//     .then((response) => response.json())
//     .then((images) => {
//       const imgs = images.message;
//       let imgsArray = createImgElement(imgs);
//       renderImg(imgsArray);
//     });
// }
// function createImgElement(imgs) {
//   return imgs.map((img) => {
//     let i = `<img src=${img}>`;
//     return i;
//   });
// }

// function renderImgs(imgsArray) {
//   imgsArray.forEach((element) => {
//     renderImg(element);
//   });
// }
// function renderImg(element) {
//   imgContainer.textContent += element;
// }

// getImages();
// getBreeds();



const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  imgURL: document.getElementById("imgURL"),
  create: document.getElementById("create"),
  container: document.getElementById("container"),
  temp: document.querySelector("display"),
  remove: document.getElementById("remove"),
};

function addNewDiv() {}

DOMSelectors.create.addEventListener("click", function () {
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let img = DOMSelectors.imgURL.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="temp">
        <image src></image>
        <h1 class="song">${song}</h1>
        <h2 class="art">${artist}</h2>
        <img src="${img}" class="myImage"alt="">
        <button id="remove" onclick="this.parentElement.remove()">Delete</button>
    </div>`
  );
});
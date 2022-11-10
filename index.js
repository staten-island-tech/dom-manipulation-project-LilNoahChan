

const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  setImg: document.getElementById("setImg"),
  set: document.getElementById("set"),
  container: document.getElementById("container"),
  temp: document.querySelector(".fake"),
  getRid: document.getElementById("remove"),
};

function addNewDiv() {}

DOMSelectors.set.addEventListener("click", function () {
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let img = DOMSelectors.setImg.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="fake">
        <image src></image>
        <h1 class="son">${song}</h1>
        <h2 class="art">${artist}</h2>
        <img src="${img}" class="myImage"alt="">
        <br>
        <button id="remove" onclick="this.parentElement.remove()">Delete</button>
    </div>`
  );
});
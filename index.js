

const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  imgURL: document.getElementById("imgURL"),
  create: document.getElementById("create"),
  container: document.getElementById("container"),
  display: document.querySelector("display"),
  remove: document.getElementById("remove"),
};

function addNewDiv() {}

DOMSelectors.create.addEventListener("click", function () {
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let img = DOMSelectors.imgURL.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="display">
        <image src></image>
        <h1 class="song">Title: ${song}</h1>
        <img src="${img}" class="myImage"alt="">
      <h2 class="art">Song By:${artist}</h2>
        <button id="remove" onclick="this.parentElement.remove()">Delete</button>
    </div>` //whoops
  );
});
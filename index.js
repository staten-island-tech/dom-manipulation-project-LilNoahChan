

const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  imgURL: document.getElementById("imgURL"),
  create: document.getElementById("create"),
  container: document.getElementById("container"),
  display: document.querySelector("display"),
  remove: document.getElementById("remove"),
};

DOMSelectors.create.addEventListener("click", function () {
  let input1 = DOMSelectors.songName.value;
  let input2 = DOMSelectors.artistName.value;
  let input3 = DOMSelectors.imgURL.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="display">
        <image src></image>
        <h1 class="song">Title: ${input1}</h1>
        <img src="${input3}" class="myImage"alt="">
      <h2 class="artist">Song By:${input2}</h2>
        <button id="remove" onclick="this.parentElement.remove()">Delete</button>
    </div>` //whoops
  );
});
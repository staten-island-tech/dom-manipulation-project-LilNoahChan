const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  imgURL: document.getElementById("imgURL"),
  create: document.getElementById("create"),
  container: document.getElementById("container"),
  display: document.querySelector("display"),
};

DOMSelectors.create.addEventListener("click", function (event) {
  event.preventDefault();
  let input1 = DOMSelectors.songName.value;
  let input2 = DOMSelectors.artistName.value;
  let input3 = DOMSelectors.imgURL.value;
  //mover functions outside
  function makeCard() {
    DOMSelectors.container.insertAdjacentHTML(
      "afterbegin",
      `<div class="display">
          <image src></image>
          <h1 class="song">Title: ${input1}</h1>
          <img src="${input3}" class="myImage"alt="">
        <h2 class="artist">Song By:${input2}</h2>
        <button class="remove">Delete</button>
      </div>`
    );
  }
  function erase() {
    let removes = document.querySelectorAll(".remove");
    removes.forEach((eachRemove) => {
      eachRemove.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
    });
  }

  makeCard();
  erase();
});

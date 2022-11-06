const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  const year = parseInt(document.getElementById('input').value);
  const age = (2022 - year);


  if (year >= 1950 && year < 1960) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  The artist was popular about ${age} years old. The most popular artist of this decade was Elvis Presley!  </p> 
  ` );
  } else if (year >= 1960 && year < 1970) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> The artist was popular about ${age} years old. The most popular artists of this decade was The Beatles! </p> 
  ` );
  } else if (year >= 1970 && year < 1980) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> The artist was popular about ${age} years old. The most popular artist of this decade was Pink Floyd! </p> 
  ` );
  } else if (year >= 1980 && year < 1990) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> The artist was popular about ${age} years old. The most popular artist of this decade was Michael Jackson! </p> 
  ` );
  } else if (year >= 1990 && year < 2000) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> The artist was popular about ${age} years old. The most popular artist of this decade was Céline Dion!  </p> 
  ` );
  } else if (year >= 2000 && year < 2010) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> The artist was popular about ${age} years old. The most popular artist of this decade was Eminem!  </p> 
  ` );
  } else if (year >= 2010 && year < 2021) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> The artist was popular about ${age} years old. The most popular artists of this decade was BTS! </p> 
  ` );
  }
  DOMSelectors.input.value = ``;
});
;


const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload();
});
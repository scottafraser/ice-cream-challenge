// this solution adds a bit of style and fixes capatilaztion

const listElement = document.getElementsByClassName("ice-cream-list")[0];
listElement.setAttribute(
  "style",
  "list-style-type:none; font-size: 4em; font-family:Consolas, monaco, monospace;"
);
document.body.setAttribute(
  "style",
  "display:flex; justify-content:center; align-items:center;"
);

iceCreamFlavors.map(string => {
  let splitWord = string.split(" ");
  let word = splitWord.map(string => {
    return string[0].toUpperCase() + string.slice(1);
  });
  listElement.insertAdjacentHTML(
    "beforeend",
    "<li>" + word.join(" ") + "</li>"
  );
});

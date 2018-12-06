// simple vanillaJS solution

const listElement = document.getElementsByClassName("ice-cream-list")[0];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  listElement.insertAdjacentHTML(
    "beforeend",
    "<li>" + iceCreamFlavors[i] + "</li>"
  );
}

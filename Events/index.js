const ele = document.getElementById("first");
ele.addEventListener("click", () => {

    ele.textContent = "change ho gya hai"

})
// Bubbling Stop Kaise Kare (Important for Interviews)
// Agar tum nahi chahte ki event parent tak jaye, to use karo:
// event.stopPropagation();

// Example:

// document.getElementById("child").addEventListener("click", (event) => {
//   console.log("Button Clicked");
//   event.stopPropagation();
// });

// parent.addEventListener("click", () => {
//   console.log("Parent capturing");
// }, true);   // true = capture phase
document.querySelectorAll("#close-btn")[0].addEventListener("click", closeOpenBtn);

let Y = document.body;

X = document.querySelectorAll(".sidebar")[0];
function closeOpenBtn() {
  setTimeout(() => {
    if (X.style.display == "none") {
      X.style.display = "flex";
      
    } else {
      X.style.display = "none";
    }
  }, 200);
}
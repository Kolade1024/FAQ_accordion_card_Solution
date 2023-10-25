const FAQ = document.querySelector(".FAQ");


FAQ.addEventListener("click", (e) => {
  if (e.target.classList.contains("qtext")) {
    let arrow = e.target.nextElementSibling;

    arrow.classList.toggle("arrowTransform");
    e.target.classList.toggle("questionColor");
    let ANS = e.target.parentElement.nextElementSibling;
    console.log(ANS);

    if(ANS.hasAttribute("class")){
      ANS.removeAttribute("class")
    }else{
      ANS.setAttribute("class", "ans");
    }
  }
});

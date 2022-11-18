const buttonMinus = document.querySelector('.welcome__button-minus');
const buttonPlus = document.querySelector('.welcome__button-plus');
let mainValue = document.querySelector('.welcome__value');
let ethValue = document.querySelector('.welcome__eth-value');
let clicks = 1;
let fakeEthValue = 0.20;

buttonMinus.addEventListener("click", () => {
  if(clicks > 1){
    clicks = clicks - 1;
    fakeEthValue = Math.round((fakeEthValue - 0.20) * 100 + Number.EPSILON ) / 100;
    mainValue.textContent = clicks;
    ethValue.textContent = fakeEthValue;
  }
})

buttonPlus.addEventListener("click", () => {
  if(clicks < 10){
    clicks = clicks + 1;
    fakeEthValue = Math.round((fakeEthValue + 0.20) * 100 + Number.EPSILON ) / 100;
    mainValue.textContent = clicks;
    ethValue.textContent = fakeEthValue;
  }
})

/* ---------------------------------------------*/
const items = document.querySelectorAll(".faq__item");

items.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("faq__item_type_active");
    let panel = this.nextElementSibling;
    let panelParagraph = panel.querySelector(".faq__panel__paragraph");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panelParagraph.classList.remove("faq__panel__paragraph_type_active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panelParagraph.classList.add("faq__panel__paragraph_type_active");
    }
  });
}); /* faq accordion */
/* ---------------------------------------------*/

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
} /* scroll show animation */
/* ---------------------------------------------*/

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    function toSmoothScroll() {
      let href = link.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = scrollTarget.offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(toSmoothScroll, 300);
  });
}); /* anchor links smooth transition */
/* ---------------------------------------------*/

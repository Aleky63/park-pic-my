let howBtn = document.querySelectorAll(".how-list__btn");
let howItem = document.querySelectorAll(".how__content");

howBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    howBtn.forEach(function (btn) {
      btn.classList.remove("how-list__btn--active");
    });
    e.currentTarget.classList.add("how-list__btn--active");

    howItem.forEach(function (element) {
      element.classList.remove("how__content--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("how__content--active");
  });
});

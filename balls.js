const balls = document.querySelector(".toggle-balls");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.nav-menu,.sidebar,.left-menu-icon,.toggle, .nav-menu li,.po,.movie-item-content, .ed,.body, :root, .search .fa-search, .search input::placeholder,.search, po p, .sqi2 h1, .sqi2 h1:hover,.sqi3 h1, .sqi3 h1:hover,#anny"
);

balls.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  balls.classList.toggle("active");
});

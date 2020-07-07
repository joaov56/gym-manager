const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".links a");

for (item of menuItems) {
  console.log(item.getAttribute("href"));

  if (item.getAttribute("href") === currentPage) {
    item.classList.add("active");
  }
}

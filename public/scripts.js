const currentPage = location.pathname;
const menuItems = document.querySelectorAll(".links a");

for (item of menuItems) {
  console.log(item.getAttribute("href"));

  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

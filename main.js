const navItems = document.querySelector(".nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

//opens nav menu dropdown
const openNav = () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

//close nav menu
const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

const sidebar = document.querySelector("aside");
const showSidebarBth = document.querySelector("#show_sidebar-btn");
const hideSidebarBtn = document.querySelector("#hide_sidebar-btn");

//show sidebar on small devices
const showSidebar = () => {
  sidebar.style.left = "0";
  showSidebarBth.style.display = "none";
  hideSidebarBtn.style.display = "inline-block";
};
//hide sidebar on small devices
const hideSidebar = () => {
  sidebar.style.left = "-100%";
  showSidebarBth.style.display = "inline-block";
  hideSidebarBtn.style.display = "none";
};
showSidebarBth.addEventListener("click", showSidebar);
hideSidebarBtn.addEventListener("click", hideSidebar);

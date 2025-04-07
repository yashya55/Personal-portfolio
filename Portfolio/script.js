const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

let sidebarVisible = true;

toggleBtn.addEventListener("click", () => {
  sidebarVisible = !sidebarVisible;
  if (sidebarVisible) {
    sidebar.style.display = "block";
    main.style.marginLeft = "240px";
  } else {
    sidebar.style.display = "none";
    main.style.marginLeft = "0";
  }
});

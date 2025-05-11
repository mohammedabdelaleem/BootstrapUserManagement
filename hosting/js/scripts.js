// Define the key to be used in localStorage
let SmallSidebarState = "Small-Sidebar";

// DOM Elements
const minimize = document.getElementById("minimize");
const maximize = document.getElementById("maximize");
const sidebar = document.querySelector(".sidebar");
const lightning = document.getElementById("lightning");
const sidebarIcons = document.querySelectorAll(".side-icon");

const handleMinimize = () => {
  minimize.classList.add("none");
  maximize.classList.remove("none");
  sidebar.classList.add("sidebar-small");
  lightning.classList.add("mt-6");

  sidebarIcons.forEach((item) => {
    item.classList.add("fit-icon");
  });

  localStorage.setItem(SmallSidebarState, "1");

};

const handleMaximize = () => {
  minimize.classList.remove("none");
  maximize.classList.add("none");
  sidebar.classList.remove("sidebar-small");
  lightning.classList.remove("mt-6");

  sidebarIcons.forEach((item) => {
    item.classList.remove("fit-icon");
  });

  localStorage.setItem(SmallSidebarState, "0");


};

const hasSidebarState = () => {
  return localStorage.getItem(SmallSidebarState) !== null;
};

const initiateSidebar = () => {
  if (!hasSidebarState()) {
    localStorage.setItem(SmallSidebarState, "0"); // default to maximized
  }
};

const applySidebarState = () => {
  const state = localStorage.getItem(SmallSidebarState);
  if (state === "1") {
    handleMinimize();
  } else {
    handleMaximize();
  }
};

const toggleSidebar = () => {
  const state = localStorage.getItem(SmallSidebarState);
  if (state === "0") {
    handleMinimize();
  } else {
    handleMaximize();
  }
};

initiateSidebar();
applySidebarState();//////////////////////

minimize.addEventListener("click", toggleSidebar);
maximize.addEventListener("click", toggleSidebar);


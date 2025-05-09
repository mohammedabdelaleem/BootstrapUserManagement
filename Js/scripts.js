// Need Updated From The Begging 02:36:55

const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('toggleSidebar');
const sidebarTextItems = document.querySelectorAll('.minimize-rm');

const minimizeSidebarText = () => {
  sidebarTextItems.forEach(item => {
    // Store original text only once
    if (!item.dataset.fulltext) {
      item.dataset.fulltext = item.innerHTML;
    }
    item.innerHTML = ''; // Minimize to icon-only view
  });
};

const restoreSidebarText = () => {
  sidebarTextItems.forEach(item => {
    if (item.dataset.fulltext) {
      item.innerHTML = item.dataset.fulltext;
    }
  });
};

toggleButton.addEventListener('click', () => {
  const isMinimized = sidebar.classList.contains('minimized');

  if (isMinimized) {
    restoreSidebarText();
    sidebar.classList.remove('minimized');
  } else {
    minimizeSidebarText();
    sidebar.classList.add('minimized');
  }
});

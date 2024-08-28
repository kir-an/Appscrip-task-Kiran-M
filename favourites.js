document.addEventListener('DOMContentLoaded', function () {
  const filterToggle = document.getElementById('filter-toggle');
  const filterMenu = document.getElementById('filter-menu');
  const imageSection = document.querySelector('.image-section');
  const gridContainer = document.querySelector('.grid-container');

  filterToggle.addEventListener('click', function () {
    if (filterMenu.style.width === '200px') {
      // Hide filter menu and restore layout
      filterMenu.style.width = '0';
      imageSection.style.marginLeft = '0';
      gridContainer.style.marginLeft = '0';
      filterToggle.textContent = 'Show Filter';
    } else {
      // Show filter menu and adjust layout
      filterMenu.style.width = '200px';
      imageSection.style.marginLeft = '200px';
      gridContainer.style.marginLeft = '200px';
      filterToggle.textContent = 'Hide Filter';
    }
  });
});


function setValue() {
  var mySelect = document.getElementById("mySelect");
  mySelect.options[mySelect.selectedIndex].text = mySelect.value;
}

//get the current year and displaying it in the footer
var currentYear = new Date().getFullYear(); 
document.getElementById("current-year").innerHTML = currentYear;

//Trigger google search into search bar
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior (which would reload the page)
  event.preventDefault();

  const searchInput = document.querySelector('.search-input');
  const searchTerm = searchInput.value;

  // Construct the Google search URL
  const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;

  // Open the Google search results in a new tab/window
  window.open(googleSearchURL, '_blank');
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {toggleStickyHeader()};

// Get the header
var header = document.getElementById("header");
var headerspace = document.getElementById("header-space");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleStickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    headerspace.classList.add("header-space-extend");
  } else {
    header.classList.remove("sticky");
    headerspace.classList.remove("header-space-extend");
  }
}
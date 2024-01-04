function setActive(element) {
    // Get the parent div with class name 'sidebar'
    var sidebarDiv = document.querySelector('.sidebar');
  
    // Remove active class from all anchor tags within the sidebar
    var menuItems = sidebarDiv.querySelectorAll('a');
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
  
    // Set active class to the clicked anchor tag
    element.classList.add('active');
  }


  document.addEventListener("DOMContentLoaded", function() {
    var sidebarDiv = document.querySelector('.sidebar');
    var initialAnchor = sidebarDiv.querySelector('a');
    initialAnchor.classList.add('active');
  });
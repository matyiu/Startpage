(function() {
  var searchGroup = document.querySelector('.search-group'),
      searchIcon = document.querySelector('.search-group .icon'),
      searchInput = document.querySelector('.search-group .search');

  searchGroup.addEventListener('mouseover', showSearch);
  searchGroup.addEventListener('mouseleave', hideSearch);
  searchInput.addEventListener('keypress', search);
  searchIcon.addEventListener('click', search)

  function showSearch() {
    searchIcon.classList.add('icon-animation');
    searchInput.classList.add('search-animation');
  }

  function hideSearch() {
    var search = searchInput.value;
    if (search == '') {
      searchIcon.classList.remove('icon-animation');
      searchInput.classList.remove('search-animation');
    }
  }

  function search(e) {
    var search = searchInput.value;
    if (e.keyCode == 13 || e.target == searchIcon) {
      window.location.href = 'https://duckduckgo.com/?q=' + search;
    }
  }
})()

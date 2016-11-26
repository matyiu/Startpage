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
    var search = searchInput.value,
        commands = /(\|g\s|\|y\s)(.+)/,
        outSearch = commands.exec(search);
    if (e.keyCode == 13 || e.target == searchIcon) {
      if(commands.test(search)) {
        if(outSearch[1] == '|y ') {
          window.location.href = 'https://www.youtube.com/results?search_query=' + outSearch[2];
        } else {
          window.location.href = 'https://www.google.es/search?site=webhp&q=' + outSearch[2];
        }
        return;
      }
      window.location.href = 'https://duckduckgo.com/?q=' + search;
    }
  }
})()

(function() {
  $.simpleWeather({
    location: 'Molina de Segura, Murcia',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      var temp = '<h2 class="title">' + weather.temp + '&deg;' +
                 weather.units.temp + '</h2>',
          weat = '<i class="icon icon-' + weather.code + '">' + '</i>',
          loc = weather.city + ', ' + weather.region + ' (' + weather.country +
          ')';
      $('#weather').html(temp + weat);
      $('#loc').html(loc);
    }
  })
})()

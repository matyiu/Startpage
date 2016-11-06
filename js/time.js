(function() {
  var contador = 0;

  setInterval(setDates, 1000);

  function setDates() {
    var date = new Date;
    var hour = date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + String(date.getMinutes()):
                  date.getMinutes();
        hourTitle = document.getElementById('hour');

    if (!contador) {
      hourTitle.textContent = hour + ':' + minutes;
      contador = 1;
    }
    else {
      hourTitle.innerHTML = hour + '<span class="hidden">:</span>' +
                            minutes;
      contador = 0;
    }

    var day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        dateSubtitle = document.getElementById("date");

    switch (month) {
      case 0: month = 'January'
        break;
      case 1: month = 'February'
        break;
      case 2: month = 'March'
        break;
      case 3: month = 'April'
        break;
      case 4: month = 'May'
        break;
      case 5: month = 'June'
        break;
      case 6: month = 'July'
        break;
      case 7: month = 'August'
        break;
      case 8: month = 'September'
        break;
      case 9: month = 'October'
        break;
      case 10: month = 'November'
        break;
      case 11: month = 'December'
        break;
    }

    dateSubtitle.textContent = day + ' ' + month + ' ' + year;
  }
})()

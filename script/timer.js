function updateTime() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // 12 h format
    /*if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }*/
    // 24 h format
    hr = dateInfo.getHours();
  
    var currentTime = hr + ":" + _min + ":" + sec;
  
    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    //document.getElementsByClassName("ampm")[0].innerHTML = ampm;  // 12 h format
  
    /* date */
    var dow = [
        "Dom",
        "Lun",
        "Mar",
        "Mié",
        "Jue",
        "Vie",
        "Sáb"
      ],
      month = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      day = dateInfo.getDate();
  
    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + day + " " + month[dateInfo.getMonth()];
  
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
  };
  
  // print time and date once, then update them every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);
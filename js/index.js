var html = document.getElementById('mes');
var mesesito = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sem = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var inid = ["L", "M", "X", "J", "V", "S", "D"];
var fecha = new Date();
var aux = fecha.getDay();
var mes = fecha.getMonth();
//Meses de 31 días

if (mes == 0 || mes == 2 || mes == 4 || mes == 7 || mes == 8 || mes == 9 || mes == 11) {

  html.innerHTML += '<div class="actual"> ' + mesesito[mes] + ', ' + sem[aux] + '</div>';

  for (k = 0; k < 7; k++) {
    html.innerHTML += '<div  class="ini">' + inid[k] + '</div>';
  }
  for (i = 1; i < 32; i++) {
    if (i == 1) {

      for (j = 0; j < aux - 1; j++) {
        html.innerHTML += '<div  class="dia off"> </div>';
      }

    }
    if (i === fecha.getDate()) {
      html.innerHTML += '<div class="spc"><strong>' + i + '</strong></div>';

    } else {
      html.innerHTML += '<div class="dia">' + i + '</div>';

    }

  }
}

//Mes de febrero
if (mes == 1) {
  html.innerHTML += '<div class="actual"> ' + mesesito[mes] + ',' + sem[aux] + '</div>';
  for (k = 0; k < 7; k++) {
    html.innerHTML += '<div  class="ini">' + inid[k] + '</div>';
  }

  for (i = 1; i < 29; i++) {
    if (i == 1) {

      for (j = 0; j < aux - 1; j++) {
        html.innerHTML += '<div  class="dia off"> </div>';
      }
    }
    if (i === fecha.getDate()) {
      html.innerHTML += '<div class="dia"><strong>' + i + '</strong></div>';

    } else {
      html.innerHTML += '<div class="dia">' + i + '</div>';

    }
  }
}

//Meses de 30 días.
if (mes == 3 || mes == 5 || mes == 6 || mes == 10) {
  html.innerHTML += '<div class="actual"> ' + mesesito[mes] + ', ' + sem[aux] + '</div>';

  for (k = 0; k < 7; k++) {
    html.innerHTML += '<div  class="ini">' + inid[k] + '</div>';
  }

  for (i = 1; i < 31; i++) {
    if (i == 1) {

      for (j = 0; j < aux - 1; j++) {
        html.innerHTML += '<div  class="dia off"> </div>';
      }
    }
    if (i === fecha.getDate()) {
      html.innerHTML += '<div class="dia"><strong>' + i + '</strong></div>';

    } else {
      html.innerHTML += '<div class="dia">' + i + '</div>';

    }
  }
}
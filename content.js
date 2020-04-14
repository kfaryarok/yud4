function ttshow(major) {
  $("." + major).show();
}

function tthide(major) {
  $("." + major).hide();
}

function ttparseTimetable() {
  if($("#phys").is(":checked")) {
    ttshow("physics");
  } else {
    tthide("physics");
  }

  if ($("#bio-b1").is(":checked")) {
    ttshow("biology-b1");
  } else {
    tthide("biology-b1");
  }

  if ($("#bio-b2").is(":checked")) {
    ttshow("biology-b2");
  } else {
    tthide("biology-b2");
  }

  if ($("#socio").is(":checked")) {
    ttshow("sociology");
  } else {
    tthide("sociology");
  }

  if ($("#law").is(":checked")) {
    ttshow("philosophy");
  } else {
    tthide("philosophy");
  }

  if ($("#chem").is(":checked")) {
    ttshow("chemistry");
  } else {
    tthide("chemistry");
  }

  if ($("#cs").is(":checked")) {
    ttshow("computer");
  } else {
    tthide("computer");
  }

  if ($("#art").is(":checked")) {
    ttshow("arts");
  } else {
    tthide("arts");
  }

  if ($("#sci").is(":checked")) {
    ttshow("science");
  } else {
    tthide("science");
  }

  ttshow("driving");

  if ($("#hist").is(":checked")) {
    ttshow("history");
    tthide("driving");
  } else {
    tthide("history");
  }

  if ($("#arab").is(":checked")) {
    ttshow("arabic");
  } else {
    tthide("arabic");
  }

  if ($("#music").is(":checked")) {
    ttshow("musics");
  } else {
    tthide("musics");
  }

  if ($("#elec").is(":checked")) {
    ttshow("electronic");
    tthide("driving");
  } else {
    tthide("electronic");
  }

  if ($("#thea").is(":checked")) {
    ttshow("theater");
    tthide("driving");
  } else {
    tthide("theater");
  }

  $("#result").show();
}

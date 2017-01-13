var add = (function(a1, a2, a3, a4, a5) {
  return a1 + a2 + a3 + a4 + a5;
});

$(document).ready(function() {
  $(".container").hide(0).delay(500).fadeIn(3500);
  $("form").submit(function(event) {
    event.preventDefault();
    var a1 = parseInt($("#a1").val());
    var a2 = parseInt($("#a2").val());
    var a3 = parseInt($("#a3").val());
    var a4 = parseInt($("#a4").val());
    var a5 = parseInt($("#a5").val());
    var result = add(a1, a2, a3, a4, a5);

    if (result <= 5) {
      $("#r1").show();
    }
    else if (result >= 6 && result < 11){
      $("#r2").show();
    }
    else if (result >= 11 && result < 16){
      $("#r3").show();
    }
    else if (result >= 16){
      $("#r4").show();
    }

    var unr = $("#uname").val();
    $(".unr").text(unr);
  });

});



var triangle = function (sideone,sidetwo,sidethree){
  if (sideone === sidetwo  && sidetwo === sidethree){
  	return "Equilateral";
  } else if (sideone === sidetwo || sidetwo === sidethree || sideone === sidethree) {
  	return "Isosceles";
  } else if ( (sideone + sidetwo) <= sidethree)  {
  	return "Not a triangle";
  } else if ( sideone !== sidetwo && sidetwo!==sidethree && sidethree!==sideone) {
  	return "Scalene";
  }
};
 //Jquery front end below
$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var sideone = parseInt($("#side1").val());
    var sidetwo = parseInt($("#side2").val());
    var sidethree = parseInt($("#side3").val());
    var result = triangle(sideone, sidetwo, sidethree);
    $("#output").empty().append(result);
  });
});

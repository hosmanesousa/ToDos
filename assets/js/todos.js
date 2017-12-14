// when an li is clicked inside a ul, run this code:
// A second argument specifies li's that may or may not have on the page inside a ul
$('ul').on("click", "li", function() {
  $(this).toggleClass("completed");
  //toggleColorLine();
});

/*
$('li').click(function() {
  $(this).toggleClass("completed");
  //toggleColorLine();
});
*/

// when the span inside the ul is clicked, run the code below {
$('ul').on("click", "span", function(event) {
  //$(this).parent().remove(); // parent() gives us the li
  $(this).parent().fadeOut(500, function(){  // this -> referes to the span
    $(this).remove(); // this-> referes to the li
  });
  event.stopPropagation(); // prevents event bubbling
});

$("input[type = 'text']").keypress( function (event) {
     if ( event.which === 13){
       var todoText = $(this).val();
       $(this).val(""); // clearing the input
       $('ul').append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
     }
});


$ ('.fa-pencil-square-o').click(function (){
    $("input[type = 'text']").fadeToggle();
});
/*
function toggleColorLine() {

  if ( $(this).css("color") === "rgb(128, 128, 128)")
  {
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  }
  else
  {
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }

// Alternative way
//  $(this).css("color", "gray");
//  $(this).css("text-decoration", "line-through");
}

*/

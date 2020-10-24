// Get the height of the scrollable area

function windowH() {
   var wH = $(window).height();
   
   console.log("I am working")

   $('.scrollspy-entries').css({height: wH});
}

windowH();

// Get the height of the scrollable area

function windowH() {
   var wH = $(window).height();

   $('.scrollspy-entries').css({height: wH});
}

windowH();

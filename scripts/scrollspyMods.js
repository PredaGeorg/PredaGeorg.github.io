// Make links go to right place
// Credit: Joey Reiness
$('.list-group a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -200);
});

// Get the height of the scrollable area
function windowH() {
   var wH = $(window).height();

   $('.scrollspy-entries').css({height: wH});
}

windowH();

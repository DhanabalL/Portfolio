$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".navbar-expand-lg").addClass("navbar-fixed");
    } else{
        $(".navbar-expand-lg").removeClass("navbar-fixed");
    }
}); 


$( '.header-section .main-menu .navbar .collapse .navbar-nav .nav-item .nav-link ' ).on('click', 
function () {
$( '.header-section .main-menu .navbar .collapse .navbar-nav' ).find( '.active' ).removeClass( 'active' );
$( this ).parent( '.header-section .main-menu .navbar .collapse .navbar-nav .nav-item' ).addClass( 'active' );
});






function about() {
    location.href="index.html#about"
}
function displaymsg() {
    alert('Process Is Going On');
}

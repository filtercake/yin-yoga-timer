// controlling event bubbling hehe
$('.a-front-container-or-element').click(function(event){ event.stopPropagation(); });

// prevent dragging. http://stackoverflow.com/questions/17068026/prevent-ios-safari-from-moving-web-page-window-so-drag-event-can-happen/23965074#23965074
$(window).bind( 'touchmove', function(e) { e.preventDefault(); } );


// tell user about updates. via https://gregsramblings.com/2012/05/28/html5-application-cache-how-to/
if (window.applicationCache) {
applicationCache.addEventListener('updateready', function() {
  if (confirm('An update is available. Install?')) {
    window.location.reload(); } });}

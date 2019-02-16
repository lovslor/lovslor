// scroll affect
$( document ).ready(function() {
  $('#scroll-arrow').click(function() {
    var aid = 'scroll-anchor'
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  });
});

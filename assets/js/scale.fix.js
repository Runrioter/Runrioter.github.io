(function() {
  var offsetHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  if (offsetHeight < windowHeight) {
    var siteFooters = document.getElementsByClassName('site-footer');
    if (siteFooters.length) {
      var sf = siteFooters[0];
      sf.style.position = 'absolute';
      sf.style.bottom = 0;
      sf.style.left = 0;
      sf.style.right = 0;
    }
  }
})();
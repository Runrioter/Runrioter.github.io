(function() {
  var vps = document.getElementsByName('viewport');
  if (vps.length && navigator.userAgent.match(/iPhone/i)) {
    vps[0].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    document.addEventListener("gesturestart", function() {
      vps[0].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }, false);
  }
  var contentHeight = document.body.scrollHeight;
  var windowHeight = window.innerHeight;
  if (contentHeight < windowHeight) {
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
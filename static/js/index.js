// AR-WAM project page
document.addEventListener('DOMContentLoaded', function () {
  // Navbar burger toggle (Bulma)
  var burger = document.querySelector('.navbar-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var target = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      if (target) target.classList.toggle('is-active');
    });
  }

  // Pause off-screen section videos to save CPU, play when visible
  var videos = document.querySelectorAll('video[data-autopause]');
  if ('IntersectionObserver' in window && videos.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.15 });
    videos.forEach(function (v) { io.observe(v); });
  }
});

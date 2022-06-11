const observer = lozad();
observer.observe();



// ;(function (e) { var t; (t = function (t) { var e = t.target.className; ~e.indexOf("htmlvid") ? BigPicture({ el: t.target, vidSrc: t.target.getAttribute("vidSrc") }) : ~e.indexOf("vimeo") ? BigPicture({ el: t.target, vimeoSrc: t.target.getAttribute("vimeoSrc"), }) : ~e.indexOf("twin-peaks") ? BigPicture({ el: t.target, ytSrc: t.target.getAttribute("ytSrc"), dimensions: [1226, 900], }) : ~e.indexOf("youtube") && BigPicture({ el: t.target, ytSrc: t.target.getAttribute("ytSrc") }); }), (document.getElementById("mainWrapper").onclick = t); })();
;(function() {
function setClickHandler(id, fn) {
  document.getElementById(id).onclick = fn
}
setClickHandler('ytVideos', function(e) {
  var className = e.target.className
  if (~className.indexOf('htmlvid')) {
    BigPicture({
      el: e.target,
      vidSrc: e.target.getAttribute('vidSrc'),
    })
  } else if (~className.indexOf('vimeo')) {
    BigPicture({
      el: e.target,
      vimeoSrc: e.target.getAttribute('vimeoSrc'),
    })
  } else if (~className.indexOf('twin-peaks')) {
    BigPicture({
      el: e.target,
      ytSrc: e.target.getAttribute('ytSrc'),
      dimensions: [1226, 900],
    })
  } else if (~className.indexOf('youtube')) {
    BigPicture({
      el: e.target,
      ytSrc: e.target.getAttribute('ytSrc'),
    })
  }
})
})();

let headerHeight = $('.top-header').outerHeight();
$(".gotToForm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#getStart").offset().top - headerHeight,
  }, 2000);
});


if($('#thankYou').length){
  $('#thankYou').popup({
    closebutton: true,
  });
}

$('.thankYou_OK').click(function(){
  $('#thankYou').popup('hide');
})

function toogleMenu(){
  $('.toogle-icon').toggleClass('active')
  $('.right-menu').toggleClass('menu-active')
}

$('.toogle-icon').click(function(e){
  // console.log(e)
  e.preventDefault();
  // console.log($(this))
  toogleMenu();
});
window.onclick = function(event) {
  let modal = $('.right-menu').get(0)
  // console.log(modal)
  // console.log(event.target)
  if (event.target == modal) {
    toogleMenu();
  }
}

$('.headerGetBtn').click(function(){
  console.log("click")
  toogleMenu();
})


// form validation 
$('.form-content select').on('change', function() {
  if ($(this).val()) {
    return $(this).css('color', '#000000');
  } else {
  return $(this).css('color', '#888888');
  }
});

$(".form-control").on("keyup change", function (event) {
  if($(this).parent().siblings('.invalid').length){
    $(this).parent().siblings('.invalid').hide()
    $(this).removeClass('error')
  }
});
function submitData(e){
  let valid = true;
  $("form#getInTouch :input[required]").each(function(){
    var input = $(this); 
    console.log(input)
    if ($(this).is(':invalid') || !$(this).val()){
      valid = false;
      $(this).addClass('error').focus();
      $(this).parent().siblings('.invalid').show()
      console.log(valid)
    }
  });
  if(valid) {
    console.log("form valid")
    $('#thankYou').popup('show');
  }
}

function AllowOnlyNumbers(e) {
  e = e ? e : window.event;
  var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
  var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
  var str =
    e.type && e.type == "paste"
      ? clipboardData.getData("Text")
      : String.fromCharCode(key);
  return /^\d+$/.test(str);
}
$(document).ready(function(){
  let t = 0, e = ["Tab", "Cuenta", "Khata"];
  setInterval(function () {
    t++,
      $(".flip-text").fadeOut(300, function () {
        $(this)
          .text(e[t % e.length])
          .fadeIn(300);
      }),
      $(".footer-flip-text").fadeOut(300, function () {
        $(this)
          .text(e[t % e.length])
          .fadeIn(300);
      });
  }, 3e3);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.mobile-start-btn').fadeOut();
  } else {
    $('.mobile-start-btn').fadeIn();
  }
});
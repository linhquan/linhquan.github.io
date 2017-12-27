$(document).ready(function() {
  $('nav li a').click(function(e) {
    e.preventDefault();
    var navHeight = $('nav').outerHeight();
    var href = $(this).attr('href'); // #dcc, whatever is in the "href"
    $('html, body').animate({
        scrollTop: $(href).offset().top - navHeight // $(href) = $('#dcc')
    }, 800);
  });

  // var cl = document.getElementsByClassName('click');
  // var th = document.getElementsByClassName('thumbnail');
  //
  // cl.addEventListener('mouseover', function(){
  //
  // });

  inprintthumb.addEventListener('mouseover', function() {
    // time=1000000;
    // console.log("time changed 1000000");
    inprint_splash.style.display="block";
    itsaight_splash.style.display="none";
    dpf_splash.style.display="none";
    venture_splash.style.display="none";
    dcc_splash.style.display="none";
    mm_splash.style.display="none";
    console.log("inprint spash show");

  });


  itsaightthumb.addEventListener('mouseover', function() {
    // time=1000000;
    // console.log("time changed 1000000");
    inprint_splash.style.display="none";
    itsaight_splash.style.display="block";
    dpf_splash.style.display="none";
    venture_splash.style.display="none";
    dcc_splash.style.display="none";
    mm_splash.style.display="none";
    console.log("itsaight spash show");
  });


  dpfthumb.addEventListener('mouseover', function() {
    // time=1000000;
    // console.log("time changed 1000000");
    inprint_splash.style.display="none";
    itsaight_splash.style.display="none";
    dpf_splash.style.display="block";
    venture_splash.style.display="none";
    dcc_splash.style.display="none";
    mm_splash.style.display="none";
    console.log("dpf spash show");
  });


  venturethumb.addEventListener('mouseover', function() {
    // time=1000000;
    // console.log("time changed 1000000");
    inprint_splash.style.display="none";
    itsaight_splash.style.display="none";
    dpf_splash.style.display="none";
    venture_splash.style.display="block";
    dcc_splash.style.display="none";
    mm_splash.style.display="none";
    console.log("venture spash show");
  });


  dccthumb.addEventListener('mouseover', function() {
    // time=1000000;
    // console.log("time changed 1000000");
    inprint_splash.style.display="none";
    itsaight_splash.style.display="none";
    dpf_splash.style.display="none";
    venture_splash.style.display="none";
    dcc_splash.style.display="block";
    mm_splash.style.display="none";
    console.log("dcc spash show");
  });

  mmthumb.addEventListener('mouseover', function() {
    // time=1000000;
    // console.log("time changed 1000000");
    inprint_splash.style.display="none";
    itsaight_splash.style.display="none";
    dpf_splash.style.display="none";
    venture_splash.style.display="none";
    dcc_splash.style.display="none";
    mm_splash.style.display="block";
    console.log("mm spash show");
  });

var isOnDiv = false;

  document.getElementsByClassName("thumbnail").addEventListener("mouseenter", function(  ) {isOnDiv=true;});
document.getElementsByClassName("thumbnail").addEventListener("mouseout", function(  ) {isOnDiv=false;});

// if ( isOnDiv===false ) {
//  showSlides();
// } else {
//  return;
// }
//
//   var slideIndex = 0;
//
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("coverimg");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

});

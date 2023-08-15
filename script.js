$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Brother", "Worker", "Traveller", "Sweet guy", "Movie lover"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Brother", "Worker", "Traveller", "Sweet guy", "Movie lover"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var emailButton = document.getElementById("emailButton");
  var nameInput = document.getElementById("name");
  var subjectInput = document.getElementById("subject");
  var messageInput = document.getElementById("message");

  emailButton.addEventListener("click", function() {
    var name = nameInput.value;
    var subject = subjectInput.value;
    var message = messageInput.value;

    var mailtoLink = "mailto:regelbarua@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent("Name: " + name + "\nMessage: " + message);

    window.location.href = mailtoLink;

    // Clear form fields after sending
    nameInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skillsSection = document.querySelector(".skills");

  function startAnimation() {
    const progressBarHTML = document.querySelector(".line.html");
    const progressBarCSS = document.querySelector(".line.css");
    const progressBarJS = document.querySelector(".line.js");

    progressBarHTML.classList.add("animate");
    progressBarCSS.classList.add("animate");
    progressBarJS.classList.add("animate");
  }

  if (skillsSection) {
    window.addEventListener("scroll", function() {
      const skillsSectionRect = skillsSection.getBoundingClientRect();
      if (skillsSectionRect.top <= window.innerHeight * 0.7) {
        startAnimation();
        window.removeEventListener("scroll", arguments.callee);
      }
    });
  }
});

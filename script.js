document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Projects | Portfolio Amit Pandey";
    document
      .querySelector("#favicon")
      .setAttribute("href", "image/hero-image.png");
  } else {
    document.title = "Come Back To Portfolio";
    document
      .querySelector("#favicon")
      .setAttribute("href", "image/hero-image.png");
  }
});

// Theme toggle
$(document).ready(function () {
  // Menu toggle
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Dark mode toggle
  $("#theme-toggle").click(function () {
    $("body, header, #theme-toggle").toggleClass("dark");
    $(".navbar ul li a").toggleClass("dark");

    // Toggle icon
    if ($(this).hasClass("dark")) {
      $(this).removeClass("fa-sun").addClass("fa-moon");
    } else {
      $(this).removeClass("fa-moon").addClass("fa-sun");
    }
  });

  // Scroll to top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $("#scroll-top").addClass("active");
    } else {
      $("#scroll-top").removeClass("active");
    }
  });

  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "Frontend Web Developer",
    " Shopify Developer",
    "Freelance Web Developer",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// <!-- typed js effect ends -->

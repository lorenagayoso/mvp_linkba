var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_6186d3af6885f60a50baa278';
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6186d3af6885f60a50baa278/1fjrb4e0h';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);})();


(function($) {
  "use strict";

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    pagination: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  document.getElementById("builder").addEventListener("click", function(event){
  event.preventDefault()
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // Mobile menu dropdown
  $(".submenu").on("click", function() {
    var width = $(window).width();
    if (width < 992) {
      $(".submenu ul").toggleClass("active");
    }
  });

  // Scroll animation init
  window.sr = new scrollReveal();

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function() {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $("a[href*=\\#]:not([href=\\#])").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 80
          },
          700
        );
        return false;
      }
    }
  });

  $(document).ready(function() {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on("click", function(e) {
      e.preventDefault();
      $(document).off("scroll");

      $("a").each(function() {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 79
          },
          500,
          "swing",
          function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function() {
      var currLink = $(this);

      try {
        var refElement = $(currLink.attr("href"));
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $(".nav ul li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      } catch (e) {
        // Ignore href='javascript:;'
      }
    });
  }

  const Accordion = {
    settings: {
      // Expand the first item by default
      first_expanded: false,
      // Allow items to be toggled independently
      toggle: false
    },

    openAccordion: function(toggle, content) {
      if (content.children.length) {
        toggle.classList.add("is-open");
        let final_height = Math.floor(content.children[0].offsetHeight);
        content.style.height = final_height + "px";
      }
    },

    closeAccordion: function(toggle, content) {
      toggle.classList.remove("is-open");
      content.style.height = 0;
    },

    init: function(el) {
      const _this = this;

      // Override default settings with classes
      let is_first_expanded = _this.settings.first_expanded;
      if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
      let is_toggle = _this.settings.toggle;
      if (el.classList.contains("is-toggle")) is_toggle = true;

      // Loop through the accordion's sections and set up the click behavior
      const sections = el.getElementsByClassName("accordion");
      const all_toggles = el.getElementsByClassName("accordion-head");
      const all_contents = el.getElementsByClassName("accordion-body");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const toggle = all_toggles[i];
        const content = all_contents[i];

        // Click behavior
        toggle.addEventListener("click", function(e) {
          if (!is_toggle) {
            // Hide all content areas first
            for (let a = 0; a < all_contents.length; a++) {
              _this.closeAccordion(all_toggles[a], all_contents[a]);
            }

            // Expand the clicked item
            _this.openAccordion(toggle, content);
          } else {
            // Toggle the clicked item
            if (toggle.classList.contains("is-open")) {
              _this.closeAccordion(toggle, content);
            } else {
              _this.openAccordion(toggle, content);
            }
          }
        });

        // Expand the first item
        if (i === 0 && is_first_expanded) {
          _this.openAccordion(toggle, content);
        }
      }
    }
  };

  (function() {
    // Initiate all instances on the page
    const accordions = document.getElementsByClassName("accordions");
    for (let i = 0; i < accordions.length; i++) {
      Accordion.init(accordions[i]);
    }
  })();

  // Home seperator
  if ($(".home-seperator").length) {
    $(".home-seperator .left-item, .home-seperator .right-item").imgfix();
  }

  // Home number counterup
  if ($(".count-item").length) {
    $(".count-item strong").counterUp({
      delay: 10,
      time: 1000
    });
  }

  // Page loading animation
  $(window).on("load", function() {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1"
      });
    }

    $("#preloader").animate(
      {
        opacity: "0"
      },
      600,
      function() {
        setTimeout(function() {
          $("#preloader")
            .css("visibility", "hidden")
            .fadeOut();
        }, 300);
      }
    );
  });
})(window.jQuery);


function builder_submit(){

let inputs = document.querySelectorAll("input");
let url_input = document.querySelector("input[name='url']").value;
let source_input = document.querySelector("input[name='source']").value;
let medium_input = document.querySelector("input[name='medium']").value;
let campaign_input = document.querySelector("input[name='campaign']").value;
let term_input = document.querySelector("input[name='term']").value;
let content_input =  document.querySelector("input[name='content']").value;
let utm_result =  document.getElementById("utm_result");


const utm_array = [] 

if((url_input.length === 0) || (source_input.length === 0) || (medium_input.length === 0))
{
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Algo está mal!',
  footer: 'Recuerda que los campos Url, Fuente y Medio son obligatorios'
  })}
else {
for(i=0 ; i < inputs.length ; i++){
if(inputs[i].value.length > 0) {utm_array.push("&utm_" + inputs[i].getAttribute("name") + "=" + inputs[i].value)}
;}

let url_source = url_input + "?utm_source=" + source_input ;

let new_array = utm_array.slice(2,utm_array.length);

let url_optimized = url_source + (new_array.toString()).replace(/,/gi, '');

utm_result.getElementsByTagName("p")[0].innerText = (url_optimized.toLowerCase()).replace(/ /gi, '_');

$(utm_result).slideDown();

return (url_optimized.toLowerCase()).replace(/ /gi, '_');

;}


;}

function test_submit(){
let utm_href =  document.getElementById("btn-result-test");

utm_href.getElementsByTagName("a")[0].setAttribute("onclick", window.open(builder_submit(),'popup','width=600,height=600'))

}

function copy_submit() {
let copyText = builder_submit();

navigator.clipboard.writeText(copyText);

Swal.fire(
  'Copiado',
  'La URL ha sido copiada',
  'success'
);
}

function random(length) {
    let result           =  '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
 }
 return result;
}

function short_submit(){

function random(length) {
    let result           =  '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
 }
 return result;
}

let url_input = document.querySelector("input[name='url']").value;

document.getElementById("utm_result").getElementsByTagName("p")[0].innerText = url_input + random(5)
}

function tour_start() {
introJs().start();
}

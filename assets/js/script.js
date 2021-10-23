let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    let width = 410; 
    let count = 2; 

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; 
 // влево
    carousel.querySelector('.prev').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
      console.log(position);
    };
// вправо
    carousel.querySelector('.next').onclick = function() {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
      console.log(position);
    };



 
$(function() {

      var header = $("#header"),
          introH = $("#intro").innerHeight(),
          scrollOffset = $(window).scrollTop();
  
  
      /* Fixed Header */
  
      checkScroll(scrollOffset);
  
      $(window).on("scroll", function() {
  
          scrollOffset = $(this).scrollTop();
  
          checkScroll(scrollOffset);
      });
  
  
      function checkScroll(scrollOffset) {
  
          if( scrollOffset >= introH ) {
              header.addClass("fixed");
          } else {
              header.removeClass("fixed");
          }
      }
  
  
      /* Smooth scroll */
  
      $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
  
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
  
        $("#nav a").removeClass("active");
        $this.addClass("active");
  
        $("html, body").animate({
            scrollTop: blockOffset
  
        }, 500);
      });
  
  
      /* Menu nav toggle */
  
      $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
  
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
  
      });
  
  
     
  
  
      
    
 
  });
  
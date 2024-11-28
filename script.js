 
/////////  home page js start //////////////////
// collection card slider 
  $(".collection_slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
//   sale section slider 
      $(".sale_slick").slick({
        dots: false,
        infinite: true,
        autoplay: 100,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll:3,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  //   sign up form auto open and close function 
      $(document).ready(function() {
        $('#signPopup').modal('show');
        // Close the modal after 10 seconds
        setTimeout(function() {
            $('#signPopup').modal('hide');
        }, 10000); 
    });

////////////// discription page js start//////////////
       //slider for product images
 $('.productDetail-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    fade: true,
     prevArrow:false,
     nextArrow:false, 
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.productDetail-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical:true,
    prevArrow:'<span class="privslide-arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:'<span class="nextslide-arrow"><i class="fa-solid fa-angle-right"></i></span>',
    responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,             
             slidesToScroll: 2,
             infinite: true,
             dots: true,
             vertical:false,
           },
         },

         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             vertical:false,
             dots: true,
           },
         },
       ],
  });
    // slider for related products
     $(".rel_product").slick({
       dots: true,
       infinite: true,
       speed: 300,
       autoplay: 3000,
       slidesToShow: 4,
       slidesToScroll: 4,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,

           },
         },
       ],
     });
let navbar = document.querySelector('.navbar')
// let navbar2 = document.querySelector('.navbar2')
let navbar3 = document.querySelector('.navbar3')
let navbar4 = document.querySelector('.navbar4')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

// document.querySelector('#cart').onclick = () =>{
//     navbar2.classList.toggle('active2');
// }


// document.querySelector('#close2').onclick = () =>{
//     navbar2.classList.remove('active2');
// }

document.querySelector('#user').onclick = () =>{
    navbar3.classList.toggle('active3');
    navbar4.classList.remove('active4');
}


document.querySelector('#close3').onclick = () =>{
    navbar3.classList.remove('active3');
}

document.querySelector('.regist-n').onclick = () =>{
    navbar4.classList.toggle('active4');
    navbar3.classList.remove('active3');
}

document.querySelector('.login-n').onclick = () =>{
    navbar3.classList.toggle('active3');
    navbar4.classList.remove('active4');
}


document.querySelector('#close4').onclick = () =>{
    navbar4.classList.remove('active4');
}

window.onscroll = () =>{

    navbar.classList.remove('active');
    navbar3.classList.remove('active3');
    navbar4.classList.remove('active4');

    if(window.scrollY > 80){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}




var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
        el: ".swiper-pagination",
      },

});



var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6.5,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
                clickable: true,
      },
    });

var swiper = new Swiper("#swipe", {
      slidesPerView: 5.5,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
                clickable: true,
      },
    });

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


$('.input-number-increment').click(function() {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(val + 1);
});

$('.input-number-decrement').click(function() {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(val - 1);
});


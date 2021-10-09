burgerMenu.onclick = function myFunction() {
	var x = document.getElementById('ul-menu')

	if (x.className ==="ul-start") {
		x.className +=" ul-end";
	} else{
		x.className = "ul-start";
	}
}

new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });
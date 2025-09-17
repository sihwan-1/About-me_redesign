$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("blur");
  } else {
    $("header").removeClass("blur");
  }
});

function Swiper_1 () {
  var swiper = new Swiper(".swiper-1", {
    loop: true,
    autoplay: {
      delay: 5000,          // 3초마다 자동 전환
      disableOnInteraction: false, // 유저가 건드려도 자동재생 유지
    },
    speed: 1000,
    navigation: {
      nextEl: ".swiper-box-1 > .swiper-button-next",
      prevEl: ".swiper-box-1 > .swiper-button-prev",
    },
  });
}
Swiper_1();

function tabBoxInit() {
	$(".bg-btn-box > div").click(function () {
		let $this = $(this);
		let $index = $this.index();

		let $section = $this.closest(".section-2");
    let $bgImg = $section.find(".bg-img-box > .cont");

		$this.siblings(".active").removeClass("active");
		$this.addClass("active");

		$bgImg.removeClass("active");
		$bgImg.eq($index).addClass("active");
	});
}

tabBoxInit();
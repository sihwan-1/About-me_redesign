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


function Swiper_3 () {
  var swiper = new Swiper(".swiper-3", {
      slidesPerView: 3.2,
      spaceBetween: 24,
    });
}
Swiper_3();

function Swiper_box() {
	$(".section-3 > .txt-box-3 > ul > li").click(function () {
		let $this = $(this);
		let $index = $this.index();

		let $section = $this.closest(".section-3");
    let $Con = $section.find(".content-box > .content");

		$this.siblings(".active").removeClass("active");
		$this.addClass("active");

		$Con.removeClass("active");
		$Con.eq($index).addClass("active");
	});
}

Swiper_box();

function Swiper_5 () {
  var swiper = new Swiper(".swiper-5", {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 40,
    });
}
Swiper_5();
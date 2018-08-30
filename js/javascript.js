$(function() {
	$(".menu-btn").click(function() {
		$(".menu").slideToggle(500);
	})
})

$(function() {
	var get_header = $(".header").outerHeight();
	$(".menu a").click(function(e) {
		e.preventDefault();
		var a = $(this).attr("href");
		$("html, body").animate({
			scrollTop:$(a).offset().top - get_header
		},1000)
		$(".menu a li").removeAttr("class");
		$(this).find("li").attr("class","active");
	})
	$(".wrapper-content p .my-btn").click(function() {
		$('html,body').animate({
			scrollTop: $(".about-us").offset().top - get_header
		},'slow')
	})
})

$(document).ready(function() {
	'use strict';

	header();
	info();
	search();
	projects();
	backgrounds();
});


$(window).on('load', function() {
	$('body').waitForImages({
		finished: function() {
			setTimeout(function() {
				$('.fade').addClass('hide');

				setTimeout(function() {
					$('.header .burger').addClass('visible');
				}, 200);
			}, 1500);
		},
		waitForAll: true
	});
});


// header
// --------------------------------------------------

function header() {
	$('.header .burger').on('click', function() {
		if (!$('.nav').hasClass('visible')) {
			toggle_nav(true);
		} else {
			toggle_nav(false);
		}
	});

	$('.nav .menu li:has(ul)').children('ul').hide();
	$('.nav .menu li:has(ul)').find('a').on('click', function() {
		var parent = $(this).parent(),
			submenu = $(this).next('ul');

		if (submenu.is(':visible')) {
			parent.find('ul').slideUp(250);
		}

		if (submenu.is(':hidden')) {
			parent.siblings().find('ul').stop().slideUp(250);
			submenu.css('height', 'auto').stop().slideDown(250);
		}

		if (parent.children('ul').length == 0) {
			return true;
		} else {
			return false;
		}
	});
}

function toggle_nav(bool) {
	if (bool == true) {
		toggle_info(false);
		toggle_search(false);
		$('.burger').addClass('active');
		$('.nav').addClass('visible');
		$('.info, .search__toggle').addClass('hide');
	} else {
		$('.burger').removeClass('active');
		$('.nav').removeClass('visible');
		$('.info, .search__toggle').removeClass('hide');
	}
}


// toggle info
// --------------------------------------------------

function info() {
	$('.info').on('click', function() {
		if (!$('.project__description').hasClass('visible')) {
			toggle_info(true);
		} else {
			toggle_info(false);
		}
	});
}

function toggle_info(bool) {
	if (bool == true) {
		toggle_nav(false);
		$('.info').addClass('active');
		$('.project__description').addClass('visible');
	} else {
		$('.info').removeClass('active');
		$('.project__description').removeClass('visible');
	}
}


// toggle search
// --------------------------------------------------

function search() {
	$('.search__toggle').on('click', function() {
		if (!$('.search').hasClass('visible')) {
			toggle_search(true);
		} else {
			toggle_search(false);
		}
	});
}

function toggle_search(bool) {
	if (bool == true) {
		toggle_nav(false);
		$('.search__toggle').addClass('active');
		$('.search').addClass('visible');
		$('.search form .field').focus();
	} else {
		$('.search__toggle').removeClass('active');
		$('.search').removeClass('visible');
	}
}


// projects
// --------------------------------------------------

function projects() {
	$('.work__entry').each(function() {
		$(this).on('mouseenter', function(e) {
			if ($(this).data('title')) {
				$('.works__mouse__title').html($(this).data('title') + '<span class="work__cat">' + $(this).data('cat') + '</span>');
				$('.works__mouse__title').addClass('visible');
			}

			$(document).on('mousemove', function(e) {
				$('.works__mouse__title').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			$('.works__mouse__title').removeClass('visible');
		});
	});
}


// backgrounds
// --------------------------------------------------

function backgrounds() {
	// background image
	$('[data-bg]').each(function() {
		var bg = $(this).data('bg');

		$(this).css({
			'background-image': 'url(' + bg + ')',
			'background-size': 'cover',
			'background-position': 'center center'
		});
	});
}

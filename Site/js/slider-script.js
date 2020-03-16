jQuery(function ($) {
	function appendContent(elem) {
		$('.circle-content .circle-content-teaser-title').html(elem.find('.circle-item-title').text());
		$('.circle-content .circle-content-teaser-desc').html(elem.find('.circle-item-desc').text());
		$('.cricle-content .circle-content-readmore').attr('href', elem.find('.circle-item-link').text());
	}

	var degree = 0;

	function rotateElem(elem) {
		var indexCurent;
		var countElem = $('.circle-container .circle-item').length;
		var indexElem = $('.circle-container .circle-item').index(elem);

		$('.circle-container .circle-item').each(function (index) {
			if ($(this).hasClass('selected')) {
				indexCurent = index;
			}
		});

		$('.circle-container .circle-item.selected').removeClass('selected');

		if (indexCurent < indexElem) {
			degree = degree - ((360 / countElem) * (indexElem - indexCurent));
		}
		if (indexCurent > indexElem) {
			degree = degree + ((360 / countElem) * (indexCurent - indexElem));
		}

		$('.circle-container').css({
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		});

		elem.addClass('selected');
	}

	function rotatePrev(elem) {
		$('.circle-container .circle-item.selected').removeClass('selected');

		var countElem = $('.circle-container .circle-item').length;
		var indexElem = $('.circle-container .circle-item').index(elem);
		degree = degree + (360 / countElem);

		$('.circle-container').css({
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		});

		elem.addClass('selected');
	}

	function rotateNext(elem) {
		$('.circle-container .circle-item.selected').removeClass('selected');

		var countElem = $('.circle-container .circle-item').length;
		var indexElem = $('.circle-container .circle-item').index(elem);
		degree = degree - (360 / countElem);

		$('.circle-container').css({
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		});

		elem.addClass('selected');
	}


	$('.circle-nav .circle-nav-prev a').on('click', function (e) {
		e.preventDefault();
		var prev = $('.circle-container .circle-item.selected').prev();
		if (prev.length == 0) {
			prev = $('.circle-container .circle-item:last-child');
		}
		rotatePrev(prev);
		appendContent(prev);
	});

	$('.circle-nav .circle-nav-next a').on('click', function (e) {
		e.preventDefault();
		var next = $('.circle-container .circle-item.selected').next();
		if (next.length == 0) {
			next = $('.circle-container .circle-item:first-child');
		}
		rotateNext(next);
		appendContent(next);
	});

	appendContent($('.circle-container .circle-item.selected'));


	setInterval(function () {
		$('.circle-nav .circle-nav-prev a').trigger('click');
	}, 4000);
});
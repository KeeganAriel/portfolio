    $(this).animate({
        top: '-=' + $(this).height() / factor,
        left: '-=' + $(this).width() / factor,
        width: $(this).width() * factor
    });

    $('.myphoto').click(function() {
	$(this).animate({'height': '100px'}, 100);
});
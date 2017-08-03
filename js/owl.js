(function ($) {
    Drupal.behaviors.owl = {
        attach: function (context, settings) {
            $('.owl-slider-wrapper', context).each(function () {
		    var $this = $(this);
		    var $this_settings = $.parseJSON($this.attr('data-settings'));
		    $this.owlCarousel($this_settings);
		    if($this_settings['keyboardNavigation'] === true) {
			    console.log("keyboard navigation enabled");
			    $(document.documentElement).keyup(function (event) {
				    if (event.keyCode == 37) {
					    $this.trigger('owl.prev');
				    } 
				    else if (event.keyCode == 39) {
					    $this.trigger('owl.next');
				    }

			    });
		    }
            });

        }
    };
})(jQuery);

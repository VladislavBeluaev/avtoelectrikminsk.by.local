import {Menu} from "./classes/Menu.class";
import {Description} from "./classes/Description.class";
(function ($) {
    $(function(){
        (new Menu('#hamburger-btn')).run();
        (new Description({
            card:'.service_type',
            cardContainer:'#card-container',
            shortDescription:'.short-description',
            fullDescription:'.full-description',
            switchShortDescContainer:'.back-collapse-text'
        })).show();
        /*$('.service_type').on('click.service_description',toggle_description);
        function toggle_description (e) {
            let target = e.target;
            let parent = '#card-container';

            if(target.tagName!=='BUTTON')
                return false;
            let currentServiceDescription$ = $(target.closest(parent));
            currentServiceDescription$.animate({
                height: "350px",
            }, 500 );

        }*/
    });

})(jQuery);
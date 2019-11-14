import {Menu} from "./classes/Menu.class";
import {Description} from "./classes/Description.class";
import {YandexMap} from "./classes/YandexMap.class";

(function ($) {
    $(function(){
        (new Menu('#hamburger-btn')).run();
        (new Description({
            card:'.service_type',
            cardContainer:'#card-container',
            cardTransform:'.front',
            shortDescription:'.short-description',
            fullDescription:'.full-description',
            switchShortDescContainer:'.back-collapse-text'
        })).show();
        (new YandexMap()).run();
    });

})(jQuery);
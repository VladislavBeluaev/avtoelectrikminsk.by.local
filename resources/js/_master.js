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
        (new YandexMap({mapContainer:'#map_canvas',
            navigationUrl:"https://www.google.com/maps/dir//53.8991169,27.5319583/@53.899117,27.531958,16z?hl=ru-RU"}))
            .run();
    });

})(jQuery);
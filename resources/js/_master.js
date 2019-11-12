(function ($) {
    $(function(){
        let btn$ = $('#hamburger-btn');
        let toggleMenu$ = btn$.next();
        $(btn$).on('click.toggle-menu','i',toggleMenu.bind(null,toggleMenu$));
        function toggleMenu(menu$,triggerData) {
            if(triggerData==='close'){
                closeToggleMenu(menu$);
                return false;
            }
            if(menu$.hasClass('d-none')){
                menu$.queue(function(next){
                    $(this).removeClass('d-none');
                    next();
                }).queue(function(next){
                    $(this).slideUp(0);
                    next();
                }).queue(function(next){
                    $(this).slideDown('normal');
                    next();
                });
            }
            else{
                closeToggleMenu(menu$);
            }
        }

        function closeToggleMenu(menu$){
            menu$.queue(function(next){
                $(this).slideUp('normal');
                next();
            }).queue(function(next){
                $(this).addClass('d-none');
                next();
            }).queue(function(next){
                $(this).removeAttr('style');
                next();
            });
        }
        $(window).on('resize.toggle-menu',resizeHandler.bind(null,btn$,toggleMenu$));
        function resizeHandler(btn$,toggleMenu$,event){
            let windowWidth= $(event.target).width();
            if(windowWidth>=580 && toggleMenu$.hasClass('d-none')===false){
                btn$.trigger('click.toggle-menu','close');
            }
        }
        $('.service_type').on('click.service_description',toggle_description);
        function toggle_description (e) {
            let target = e.target;
            let parent = '#card-container';

            if(target.tagName!=='BUTTON')
                return false;
            let currentServiceDescription$ = $(target.closest(parent));
            currentServiceDescription$.animate({
                height: "350px",
            }, 500 );

        }
    });

})(jQuery);
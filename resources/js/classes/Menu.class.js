export class Menu {
    constructor(toggleBtn) {
        this._toggleBtn$ = $(toggleBtn);
        this._toggleMenu$ = this._toggleBtn$.next();
    }

    run() {
        this._toggleBtn$.on('click.toggle-menu', 'i', this._toggleMenuHandler.bind(this, this._toggleMenu$));
        $(window).on('resize.toggle-menu', Menu.resizeHandler.bind(this, this._toggleBtn$, this._toggleMenu$));
    }

    _toggleMenuHandler(menu$,triggerData) {
        if (triggerData === 'close') {
            this._closeToggleMenu(menu$);
            return false;
        }
        if (menu$.hasClass('d-none')) {
            menu$.queue(function (next) {
                $(this).removeClass('d-none');
                next();
            }).queue(function (next) {
                $(this).slideUp(0);
                next();
            }).queue(function (next) {
                $(this).slideDown('normal');
                next();
            });
        }
        else {
            this._closeToggleMenu(menu$);
        }
    }

    _closeToggleMenu(menu$) {
        menu$.queue(function (next) {
            $(this).slideUp('normal');
            next();
        }).queue(function (next) {
            $(this).addClass('d-none');
            next();
        }).queue(function (next) {
            $(this).removeAttr('style');
            next();
        });
    }
    static resizeHandler(btn$,toggleMenu$,event){
        let windowWidth= $(event.target).width();
        if(windowWidth>=580 && toggleMenu$.hasClass('d-none')===false){
            btn$.find('i').trigger('click.toggle-menu','close');
        }
    }
}

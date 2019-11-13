/**
 * Created by User on 13.11.2019.
 */
export class Description {
    constructor(settings) {
        this._serviceType$ = $(settings.card);
        this._serviceTypeContainer = settings.cardContainer;
        this._cardTransform = settings.cardTransform;
        this._shortDescription = settings.shortDescription;
        this._fullDescription = settings.fullDescription;
        this._switchShortDescContainer$ = $(settings.switchShortDescContainer);
        this._currentOverServiceType = null;
    }

    show() {
        this._serviceType$.on('click.service_full_description', 'button', $.proxy(this._showFullDescription, this));
        this._serviceType$.on('mouseover.service_short_description', $.proxy(this._short_description_over, this));
        this._serviceType$.on('mouseout.service_full_description', $.proxy(this._full_description_out, this));

        $(this._cardTransform).on('click.transform-back-face', $.proxy(this._showBackFace, this));

        this._switchShortDescContainer$.on('click.service_short_description', 'span', $.proxy(this._showShortDescription, this));
    }

    _showFullDescription(e) {
        let target = e.target;
        if (target.tagName !== 'BUTTON')
            return false;
        this._toggleDescription(target, 'back');
        e.stopImmediatePropagation();
    }

    _showShortDescription(e) {
        let target = e.target;
        if (target.tagName !== 'SPAN')
            return false;
        this._toggleDescription(target, 'front');
        e.stopImmediatePropagation();
    }

    _short_description_over(e) {
        if (this._currentOverServiceType !== null) return false;
        let target = e.target.closest(this._serviceTypeContainer);
        if (!target) return false;
        this._currentOverServiceType = target;
    }

    _full_description_out(e) {
        if (!this._currentOverServiceType) return false;
        let relatedTarget = e.relatedTarget;
        while (relatedTarget) {
            if (relatedTarget === this._currentOverServiceType) {
                return;
            }
            relatedTarget = relatedTarget.parentNode;
        }
        this._showFrontFace();
        if ($(this._currentOverServiceType).data('full-description') !== undefined) {
            console.log('calling');
            $(this._currentOverServiceType).find(this._switchShortDescContainer$).find('span').first().trigger('click.service_short_description');
        }
        this._currentOverServiceType = null;
    }

    _toggleDescription(target, face) {
        let currentServiceDescription$ = $(target.closest(this._serviceTypeContainer));
        let shortDescription$ = $(this._shortDescription, currentServiceDescription$);
        let fullDescription$ = $(this._fullDescription, currentServiceDescription$);
        let self = this;
        currentServiceDescription$.queue(function (next) {
            if (face === 'back') {
                $(this).data('full-description', true);
                self._toggleFade(fullDescription$, shortDescription$);
            } else if (face === 'front') {
                $(this).removeData('full-description');
                self._toggleFade(shortDescription$, fullDescription$);
            }
            $(this).animate({
                height: face === 'back' ? `${fullDescription$.height() + 24}px` : '180px',
            }, 500);
            next();
        });
    }

    _toggleFade(inEl, outEl) {
        outEl.queue(function (next) {
            $(this).fadeIn('normal');
            next();
        }).queue(function (next) {
            $(this).addClass('d-none');
            next();
        });
        inEl.queue(function (next) {
            $(this).removeClass('d-none');
            next();
        }).queue(function (next) {
            $(this).fadeOut(0);
            next();
        }).queue(function (next) {
            $(this).fadeIn('normal');
            next();
        });
    }


    _showBackFace(e) {
        let target = e.target;
        if (!target.closest(this._cardTransform)) return false;
        this._showFrontFace();
        let card = target.closest(this._cardTransform).parentNode;
        $(card).queue(function (next) {
            $(this).css({
                transform: 'rotateY(180deg)'
            }).attr('data-current-transform', true);
            next();
        }).queue(function (next) {
            let parent$ = $(this).parent();
            parent$.find('.blackout, .service-header').css({
                visibility: 'hidden'
            });
            next();
        });
    }

    _showFrontFace() {
        let currentTransform$ = $(`[data-current-transform=true]`);
        if (currentTransform$.length) {
            currentTransform$.queue(function (next) {
                $(this).css({
                    transform: 'rotateY(0deg)'
                }).removeAttr('data-current-transform');
                next();
            }).queue(function (next) {
                let parent$ = $(this).parent();
                parent$.find('.blackout, .service-header').css({
                    visibility: 'visible'
                });
                next();
            });
        }
    }
}

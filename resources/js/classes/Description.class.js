/**
 * Created by User on 13.11.2019.
 */
export class Description{
    constructor(settings){
        this._serviceType$ = $(settings.card);
        this._serviceTypeContainer = settings.cardContainer;
        this._shortDescription = settings.shortDescription;
        this._fullDescription = settings.fullDescription;
        this._switchShortDescContainer$ = $(settings.switchShortDescContainer);
        this._currentOverServiceType = null;
    }
    show(){
        this._serviceType$.on('click.service_full_description','button',$.proxy(this._showFullDescription,this));
        this._serviceType$.on('mouseover.service_short_description',$.proxy(this._short_description_over,this));
        this._serviceType$.on('mouseout.service_full_description',$.proxy(this._full_description_out,this));


        this._switchShortDescContainer$.on('click.service_short_description','span',$.proxy(this._showShortDescription,this));
    }
    _showFullDescription(e){
        let target = e.target;
        if(target.tagName!=='BUTTON')
            return false;
        let currentServiceDescription$ = $(target.closest(this._serviceTypeContainer));
        //let self = this;
        let shortDescription$ = $(this._shortDescription,currentServiceDescription$);
        let fullDescription$ = $(this._fullDescription,currentServiceDescription$);
        currentServiceDescription$.queue(function (next) {
            shortDescription$.queue(function (next) {
                $(this).fadeIn('normal');
                next();
            }).queue(function (next) {
                $(this).addClass('d-none');
                next();
            });
            fullDescription$.queue(function (next) {
                $(this).removeClass('d-none');
                next();
            }).queue(function (next) {
                $(this).fadeOut(0);
                next();
            }).queue(function (next) {
                $(this).fadeIn('normal');
                next();
            });
            let fullHeightDescription = fullDescription$.height()+24;
            $(this).animate({
                height: `${fullHeightDescription}px`,
            }, 500 ).data('full-description',true);
            next();
        });
    }
    _showShortDescription(e){
        let target = e.target;
        if(target.tagName!=='SPAN')
            return false;
        let currentServiceDescription$ = $(target.closest(this._serviceTypeContainer));
        let shortDescription$ = $(this._shortDescription,currentServiceDescription$);
        let fullDescription$ = $(this._fullDescription,currentServiceDescription$);
        currentServiceDescription$.queue(function (next) {
            fullDescription$.queue(function (next) {
                $(this).fadeIn('normal');
                next();
            }).queue(function (next) {
                $(this).addClass('d-none');
                next();
            });
            shortDescription$.queue(function (next) {
                $(this).removeClass('d-none');
                next();
            }).queue(function (next) {
                $(this).fadeOut(0);
                next();
            }).queue(function (next) {
                $(this).fadeIn('normal');
                next();
            });
            $(this).animate({
                height: `180px`,
            }, 500 ).removeData('full-description');
            next();
        });
    }
    _short_description_over(e){
        if (this._currentOverServiceType!==null) return false;
        let target = e.target.closest(this._serviceTypeContainer);
        if (!target) return false;
        this._currentOverServiceType = target;
    }
    _full_description_out(e){
        if (!this._currentOverServiceType) return false;
        let relatedTarget = e.relatedTarget;
        //console.log(relatedTarget);
        while (relatedTarget) {
            // go up the parent chain and check – if we're still inside currentElem
            // then that's an internal transition – ignore it
            if (relatedTarget == this._currentOverServiceType){
                console.log('here');
                console.log(relatedTarget);
                return;
            }
            relatedTarget = relatedTarget.parentNode;
        }
        this._switchShortDescContainer$.
        this._currentOverServiceType = null;
    }
}

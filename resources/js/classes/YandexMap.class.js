export class YandexMap{
    constructor(settings){
        this._marker$ = $(settings.mapContainer);
        this._url = settings.navigationUrl;
    }
    run(){
        this._marker$.on('click.navigation','img',$.proxy(this._openNavigation,this));
    }
    _openNavigation(){
        window.open(this._url);
    }
}
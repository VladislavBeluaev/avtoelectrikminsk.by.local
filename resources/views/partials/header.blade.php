@section('header')
    <header role="banner" id="main_header">
        <div class="header-wrapper">
            <div class="header-wrapper__logo">
                <p>
                    <img src="{{asset('storage/header/logo.png')}}" alt="main_logo">
                </p>
            </div>
            <div class="header-wrapper__mobile-contacts">
                <h2>Автоэлектрик в Минске 24 часа</h2>
                <h2><a href="">+375 29 925 80 45</a></h2>
                <h2><a href="">+375 25 605 81 75</a></h2>
            </div>

            <div class="header-wrapper__social-contacts">
                <h5>
                    <span>г.Минск,</span>
                    <span>ул. Западная 7 А</span>
                </h5>
                <div class="social-contacts__wrapper">
                    <p>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </p>
                    <p>
                        <a href=""><i class="fab fa-vk"></i></a>
                    </p>
                    <p>
                        <a href=""><i class="fab fa-viber"></i></a>
                    </p>
                </div>
                <div class="height-support"></div>
            </div>
        </div>
        <div class="header-wrapper__for-mobile-contacts">
            <h2><span>Автоэлектрик в Минске</span> <span>24 часа</span></h2>
            <h2><a href="">+375 29 925 80 45</a></h2>
            <h2><a href="">+375 25 605 81 75</a></h2>
        </div>
    </header>
    @endsection

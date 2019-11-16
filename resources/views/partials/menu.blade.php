@section('main_menu')
    <nav role="navigation">
        <div class="container">
            <ul role="menu">
                <li role="menuitem"><a href="{{route('main')}}">Главная</a></li>
                <li role="menuitem"><a href="{{route('main')}}/#diagnostics">Диагностика</a></li>
                <li role="menuitem"><a href="{{route('main')}}/#repair">Ремонт</a></li>
                <li role="menuitem"><a href="{{route('main')}}/#contacts">Контакты</a></li>
            </ul>
        </div>
    </nav>
    <nav role="navigation" id="mobile-menu">
        <div class="container">
            <p id="hamburger-btn">
                <i class="fa fa-2x fa-bars" aria-hidden="true"></i>
            </p>
            <ul role="menu">
                <li role="menuitem"><a href="{{route('main')}}">Главная</a></li>
                <li role="menuitem"><a href="{{route('main')}}/#diagnostics">Диагностика</a></li>
                <li role="menuitem"><a href="{{route('main')}}/#repair">Ремонт</a></li>
                <li role="menuitem"><a href="{{route('main')}}/#contacts">Контакты</a></li>
            </ul>
        </div>
    </nav>
@endsection

@extends('layout.welcome')
@include('partials.header')
@include('partials.menu')
@section('content')
    <main role="main">
        <div class="container">
            <div class="diagnostics">
                <h2>Диагностика</h2>
                <div class="diagnostics-content">
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_1.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Компьютерная</span> <span>диагностика</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                Используя современное оборудование и методики проводим полную диагностику систем автомобиля.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_2.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>двигателя</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                Диагностика работы элементов систем двигателя автомобиля квалифицированными мастерами, определение: — качества работы
                                мотора, — неисправностей при запуске мотора, — причин падения мощности, — причин посторонних звуков в моторе и пр.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_3.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>АКПП</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                Проводим полную диагностику автоматической коробки передач автомобиля,
                                устанавливаем наличие или отсутствие проблем в работе коробки, консультируем и при выявлении ошибок подбираем наиболее оптимальное решение проблем с последующим устранением.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_4.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>ABS</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                Антиблокировочная система – важная составляющая системы безопасности автомобиля. Наши мастера произведут качественную диагностику системы с определением необходимости ремонта блока ABS.
                                Позаботьтесь о безопасности заранее.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                </div>
                <div class="vertical-margin">

                </div>
                <div class="diagnostics-content">
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_5.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>Airbag</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                С помощью современной компьютерной диагностики определяем наличие или отсутствие неисправностей в системе работы подушек безопасности Вашего автомобиля.
                                Ремонт, прошивка, удаление ошибок, восстановление работоспособности.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_6.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>климат контроля</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                При помощи спецоборудования производим считывание системы климат контроля Вашего автомобиля, определяем состав, температуру, влажность воздуха в Авто.
                                При выявлении дефекта системы наши сотрудники подберут наиболее рациональное решение по устранению ошибок, проконсультируют и дадут советы для дальнейшей успешной работы системы.
                                (Устранение климатического дискомфорта в салоне).
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_7.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>приборной панели</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                Данный тип компьютерной проверки направлен на считывание, расшифровку и анализ полученных значений приборной панели.
                                Проверка показаний спидометра, тахометра, указателей уровня топлива, температуры и пр. показателей, значения которых выводятся на панель приборов.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                    <div class="card">
                        <div class="diagnostics-content__item">
                            <div class="blackout"></div>
                            <p><img src="{{asset('storage/diagnostics/diagnostics_8.jpg')}}" alt=""></p>
                            <p class="item__header"><span>Диагностика</span> <span>иммобилайзера</span></p>
                        </div>
                        <div class="card-content">
                            <p>
                                Диагностика и проверка корректности механизма, предотвращающего возможность запуска двигателя Вашего автомобиля третьими лицами. Позволяет выявить все неисправности в работе системы.
                                Осуществляем услуги по проверке соответствия, перепрограммированию устройства, отключению прибора и пр.
                            </p>
                            {{--<button type="button" class="btn btn-dark btn-sm">Читать далее</button>--}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection

@section('map')
    <section role="application">
        <div class="container">
            <div class="contacts">
                <h2>Контакты</h2>
                    <div class="contacts-map-wrapper">
                        <div class="map-information">
                            <p>г.Минск, Беларусь</p>
                            <p>ул. Западная 7а</p>
                        </div>
                        {!! $map['html'] !!}
                </div>
            </div>
        </div>
    </section>
@endsection
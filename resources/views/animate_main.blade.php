@extends('layout.welcome')
@include('partials.header')
@include('partials.menu')
@section('content')
    <main role="main">
        @foreach($services as $service)
            <div class="container">
                <h2>{{$service->name}}</h2>
                <div class="box">
                    @foreach($service->service_types as $service_type)
                        <div id="card-container" class="service_type">
                            <div id="card">
                                <div class="front face">
                                    <p class="service-header">
                                        @if(count($service_type->title)===3)
                                            <span>{{$service_type->title[0]}}</span>
                                            <span>{{$service_type->title[1]}} {{$service_type->title[2]}}</span>
                                        @else
                                            <span>{{$service_type->title[0]}}</span>
                                            <span>{{$service_type->title[1]}}</span>
                                        @endif
                                    </p>
                                    <div class="blackout"></div>
                                    <img src="{{asset($service_type->img_src)}}" alt="{{$service_type->img_alt}}"/>
                                </div>
                                <div class="back face">
                                    <div class="back-short-content">
                                        <p>{{$service_type->short_description}}</p>
                                    </div>
                                    <div class="back-read-more-btn">
                                        <button type="button" class="btn btn-dark btn-sm">Полное описание</button>
                                    </div>
                                    {{--@unless(mb_strlen($service_type->short_description)===92)
                                    <div class="back-read-more-btn">
                                        <button type="button" class="btn btn-dark btn-sm">Читать далее</button>
                                    </div>
                                        @endunless--}}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach
    </main>
@endsection

@extends('layout.welcome')
@include('partials.header')
@include('partials.menu')
@section('content')
    <div class="container">
        <div class="box">
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_1.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_2.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_3.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_4.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_5.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_6.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_7.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div id="card">
                    <div class="front face">
                        <div class="blackout"></div>
                        <img src="{{asset('storage/diagnostics/diagnostics_8.jpg')}}"/>
                    </div>
                    <div class="back face">
                        <h1>Bouquet</h1>
                        <p class="artist">The Chainsmokers</p>
                        <p class="date">2015</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Услуги автоэлектрика в Минске</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
              integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <link rel="stylesheet" href="{{asset('css/master.css')}}">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:700,900&display=swap" rel="stylesheet">
        <script
                src="https://code.jquery.com/jquery-3.4.1.min.js"
                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                crossorigin="anonymous"></script>
        <script src="{{asset('js/master.js')}}" type="module" defer></script>
        <script src="//code.jivosite.com/widget.js" data-jv-id="CjbACmwmlC" async></script>
    </head>
    <body>
    <div class="container">
        @yield('header')
        @yield('main_menu')
        @yield('content')
        @yield('map')
    </div>
    @jivochat
    </body>
</html>

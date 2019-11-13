<?php

namespace App\Http\Controllers;

use App\Services;
use FarhanWazir\GoogleMaps\GMaps;
use Illuminate\Http\Request;

class PagesController extends Controller
{
   function index(Services $services){
       //https://console.developers.google.com/apis/credentials?project=avtoelectrikminsk
       $config['center'] = 'Clifton, Karachi';
       $config['zoom'] = '14';
       $config['map_height'] = '500px';
       $config['map_width'] = '500px';
       $config['scrollwheel'] = false;
       $gmap = new GMaps();
       $gmap->initialize($config);
       $map = $gmap->create_map();
       return view('animate_main',[
           'services'=>$services->with('service_types')->get(),
           'map'=>$map
       ]);



       //return view('animate_main')->with('services',$services->with('service_types')->get());


   }
}

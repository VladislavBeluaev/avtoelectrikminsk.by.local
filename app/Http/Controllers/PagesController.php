<?php

namespace App\Http\Controllers;

use App\Services;
use FarhanWazir\GoogleMaps\GMaps;
use Illuminate\Http\Request;

class PagesController extends Controller
{
   function index(Services $services,GMaps $gmap){
       $config['center'] = '53.899190,27.531930';
       $config['zoom'] = 18;
       $config['height'] = '500px';
       $config['places'] = true;
       $config['streetViewLinksControl'] = false;
       $config['scrollwheel'] = false;
       $config['disableMapTypeControl'] = true;
       $gmap->initialize($config);

       //Marker map
       $marker['position'] = '53.899190,27.531930';//'53.899150,27.532700';
       $marker['infowindow_content'] = 'avtoelectrikminsk.by';
       $marker['clusterMaxZoom'] = 0;
       //$marker['icon'] = asset('storage/map/output-onlinepngtools.png');
       $marker['icon'] = asset('storage/map/marker_title.png');
       $marker['title'] = 'ул. Западная 7а';
       $gmap->add_marker($marker);

       $map = $gmap->create_map();
       return view('animate_main',[
           'services'=>$services->with('service_types')->get(),
           'map'=>$map
       ]);


   }
}

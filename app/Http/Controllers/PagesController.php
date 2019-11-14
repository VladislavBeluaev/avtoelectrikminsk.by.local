<?php

namespace App\Http\Controllers;

use App\Services;
use FarhanWazir\GoogleMaps\GMaps;
use Illuminate\Http\Request;

class PagesController extends Controller
{
   function index(Services $services){

       return view('animate_main')->with('services',$services->with('service_types')->get());


   }
}

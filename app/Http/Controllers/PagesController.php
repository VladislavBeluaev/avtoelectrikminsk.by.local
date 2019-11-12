<?php

namespace App\Http\Controllers;

use App\Services;
use Illuminate\Http\Request;

class PagesController extends Controller
{
   function index(Services $services){
       /*return view('main');*/
       return view('animate_main')->with('services',$services->with('service_types')->get());
   }
}

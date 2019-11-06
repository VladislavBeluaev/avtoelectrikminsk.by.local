<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
   function index(){
       /*return view('main');*/
       return view('animate_main');
   }
}

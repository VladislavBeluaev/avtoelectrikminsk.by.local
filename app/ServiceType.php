<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceType extends Model
{
   function getTitleAttribute($value){
       return explode(" ",$value);
   }
   /*function getDescriptionAttribute($value){
       if(strlen($value) > 190) {
          return  preg_replace("/^(.{1,190})(\s.*|$)/s", '\\1...', $value);
       }
       return $value;
   }*/
}

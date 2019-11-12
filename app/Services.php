<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    function service_types()
    {
       return $this->hasMany(ServiceType::class,'fk_service','id');
    }
    function getNameAttribute($value){
        return mb_strtoupper($value);
    }
    protected $fillable = ['title'];
}

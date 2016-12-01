<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $table = 'subject';

    public function subjected(){
      return $this->belongsTo('App\newUser', 'student_id', 'student_id');
    }
}

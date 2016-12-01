<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\User;
use Request;
class LoginController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function submitData(){
    	return view('home.login');
    }

    public function retriveData(){
    	$firstname = Request::get('firstname');
    	$lastname = Request::get('lastname');
     	// return $firstname;

    	$table = new User();
    	$table['firstName'] = $firstname;
    	$table['lastName'] = $lastname;
    	$table->save();
    }	
}

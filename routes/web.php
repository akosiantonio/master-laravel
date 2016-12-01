<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {

    return view('welcome');
});


Route::get('/login', array('uses' => 'LoginController@submitData', 'as' => 'submitData'));
Route::get('/admin-dashboard', array('uses' => 'AdminDashboardController@userData', 'as' => 'userData'));
Route::get('/admin-enroll-a-student', array('uses' => 'AdminEnrollAStudentController@studentData', 'as' =>'studentData'));
Route::get('/home/submit', array('uses' => 'LoginController@retriveData', 'as' => 'retriveData'));
Route::get('/admin-calendar', array('uses' => 'AdminCalendarController@calendarData', 'as' => 'calendarData'));
//Route::get('/master-layout', array('uses' => 'MasterLayoutController@renderView', 'as' => 'renderView'));
Route::get('/blade', function () {
    return view('layoutmaster');
});

Route::get('test', function(){
      echo "<form method='POST'>";
      echo '<input type="hidden" value="' . csrf_token() . '" name="_token">';
      echo "<input type='text' placeholder='name' name='name'>";
      //echo "<input type='hidden' name='_method' value='POST'>";
      echo "<input type='submit' name='_method' value='PUT'>";
      echo "<input type='submit' name='_method' value='put'>";
      echo "</form>";
});

Route::post('test', function(){
      echo "request->name";
});

Route::put('test', function(){
    echo "haha";
});

Route::get('user', function(){
    $user = App\newUser::get();
    foreach($user as $s){
      echo $s->student_id. $s->last_name;
    }

});

Route::get('subject', function(){
  $subjection = App\Subject::all();
  foreach($subjection as $s){
  echo  $s->subjected->last_name ." has ".$s->subject .  "<br>";
}
});

Auth::routes();

Route::get('/home', 'HomeController@index');

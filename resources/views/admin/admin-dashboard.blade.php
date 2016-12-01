
@section('content')
<div class='row'>
<div class='col-lg-3'>
<div class='card-box'>
  <h4 class='text-dark header-title m-t-0 m-b-30'>Student Statistics</h4>
  <div class='widget-chart text-center'>
    <span class='icon-large' style='background: #3498db;'>
      <i class='fa fa-users'></i>
    </span>
    <ul class='list-inline m-t-15'>
      <li>
        <h5 class='text-muted m-t-20'>Enrolled</h5>
        <h4 class='m-b-0'>1000</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Active</h5>
        <h4 class='m-b-0'>523</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Inactive</h5>
        <h4 class='m-b-0'>965</h4>
      </li>
    </ul>
  </div>
</div>
</div>
<div class='col-lg-3'>
<div class='card-box'>
  <h4 class='text-dark header-title m-t-0 m-b-30'>Staff Statistics</h4>
  <div class='widget-chart text-center'>
    <span class='icon-large' style='background: #1abc9c;'>
      <i class='fa fa-user-secret'></i>
    </span>
    <ul class='list-inline m-t-15'>
      <li>
        <h5 class='text-muted m-t-20'>Teachers</h5>
        <h4 class='m-b-0'>1000</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Staff</h5>
        <h4 class='m-b-0'>523</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Admin</h5>
        <h4 class='m-b-0'>965</h4>
      </li>
    </ul>
  </div>
</div>
</div>
<div class='col-lg-3'>
<div class='card-box'>
  <h4 class='text-dark header-title m-t-0 m-b-30'>Student Attendance</h4>
  <div class='widget-chart text-center'>
    <span class='icon-large' style='background: #27ae60;'>
      <i class='fa fa-file-text'></i>
    </span>
    <ul class='list-inline m-t-15'>
      <li>
        <h5 class='text-muted m-t-20'>Present</h5>
        <h4 class='m-b-0'>700</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Late</h5>
        <h4 class='m-b-0'>523</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Inactive</h5>
        <h4 class='m-b-0'>965</h4>
      </li>
    </ul>
  </div>
</div>
</div>
<div class='col-lg-3'>
<div class='card-box'>
  <h4 class='text-dark header-title m-t-0 m-b-30'>Staff Attendance</h4>
  <div class='widget-chart text-center'>
    <span class='icon-large' style='background: #8e44ad;'>
      <i class='fa fa-file-text-o'></i>
    </span>
    <ul class='list-inline m-t-15'>
      <li>
        <h5 class='text-muted m-t-20'>New</h5>
        <h4 class='m-b-0'>1000</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Absent</h5>
        <h4 class='m-b-0'>523</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Late</h5>
        <h4 class='m-b-0'>965</h4>
      </li>
    </ul>
  </div>
</div>
</div>
</div>
<div class='row'>
<div class='col-lg-4'>
<div class='card-box'>
  <h4 class='text-dark header-title m-t-0 m-b-30'>Student Breakdown</h4>
  <div class='widget-chart text-center'>
    <div id='studentGradeBreakdown' style='height: 303px;'></div>
    <ul class='list-inline m-t-15'>
      <li>
        <h5 class='text-muted m-t-20'>New</h5>
        <h4 class='m-b-0'>1000</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Old</h5>
        <h4 class='m-b-0'>523</h4>
      </li>
      <li>
        <h5 class='text-muted m-t-20'>Dropped</h5>
        <h4 class='m-b-0'>18</h4>
      </li>
    </ul>
  </div>
</div>
</div>
<div class='col-lg-8'>
<div class='card-box'>
  <h4 class='text-dark header-title m-t-0'>Student Per Grade Level</h4>
  <div class='text-center'>
    <ul class='list-inline chart-detail-list'>
      <li>
        <h5><i class='fa fa-circle m-r-5' style='color: #5fbeaa;'></i>Number of Students
        </h5>
      </li>
    </ul>
  </div>
  <div id='student-grade-breakdown' style='height: 372px;'></div>
</div>
</div>
</div>
</div>
</div>
</div>
@endsection

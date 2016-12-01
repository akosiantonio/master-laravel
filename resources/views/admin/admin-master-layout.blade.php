<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta content='A fully featured admin theme which can be used to build CRM, CMS, etc.' name='description'>
    <meta content='Coderthemes' name='author'>
    <link href='assets/images/favicon_1.ico' rel='shortcut icon'>
    <title>Administrator</title>
    <!-- Morris Chart CSS -->
    <link href="stylesheets/main.css?1476255701" rel="stylesheet" type="text/css" />
    <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>  <![endif]-->
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <script src='assets/js/modernizr.min.js'></script>
  </head>
  <body>
    <!--[if lt IE 8]>
    <p class='browsehappy'>
    You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
    </p>
    <![endif]-->
    <div class='container'>
    <header id='topnav'>
    <div class='topbar-main'>
    <div class='container'>
    <!-- Logo container -->
    <div class='logo'>
    <a class='logo' href='index.html'>
    <span>SchulerTrack</span>
    </a>
    </div>
    <!-- End Logo container -->
    <div class='menu-extras'>
    <ul class='nav navbar-nav navbar-right pull-right'>
    <li class='navbar-c-items'>
      <form class='navbar-left app-search pull-left hidden-xs' role='search'>
        <input class='form-control' placeholder='Search...' type='text' value='Search...'>
        <a href=''>
          <i class='fa fa-search'></i>
        </a>
      </form>
    </li>
    <li class='dropdown navbar-c-items'>
      <a aria-expanded='true' class='dropdown-toggle waves-effect waves-light' data-target='#' data-toggle='dropdown' href='#'>
        <i class='icon-pencil'></i>
        <span class='badge badge-xs badge-danger'>3</span>
      </a>
      <ul class='dropdown-menu dropdown-menu-lg todo'>
        <li>
          <div class="card-box">
              <h4 class="m-t-0 m-b-20 header-title"><b>Todo</b></h4>
              <div class="todoapp">
                  <div class="row">
                      <div class="col-sm-6">
                          <h4 id="todo-message"><span id="todo-remaining"></span> of <span id="todo-total"></span> remaining</h4>
                      </div>
                      <div class="col-sm-6">
                          <a href="" class="pull-right btn btn-primary btn-sm waves-effect waves-light" id="btn-archive">Archive</a>
                      </div>
                  </div>

                  <ul class="list-group no-margn nicescroll todo-list" style="height: 280px" id="todo-list"></ul>

                   <form name="todo-form" id="todo-form" role="form" class="m-t-20">
                      <div class="row">
                          <div class="col-sm-9 todo-inputbar">
                              <input type="text" id="todo-input-text" name="todo-input-text" class="form-control" placeholder="Add new todo">
                          </div>
                          <div class="col-sm-3 todo-send">
                              <button class="btn-primary btn-md btn-block btn waves-effect waves-light" type="button" id="todo-btn-submit">Add</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
        </li>
      </ul>
    </li>
    <li class='dropdown navbar-c-items'>
      <a aria-expanded='true' class='dropdown-toggle waves-effect waves-light' data-target='#' data-toggle='dropdown' href='#'>
        <i class='icon-bell'></i>
        <span class='badge badge-xs badge-danger'>3</span>
      </a>
      <ul class='dropdown-menu dropdown-menu-lg'>
        <li class='notifi-title'><span class='label label-default pull-right'>New 3</span>Notification
        </li>
        <li class='list-group slimscroll-noti notification-list'>
          <!-- list item -->
          <a class='list-group-item' href='javascript:void(0);'>
            <div class='media'>
              <div class='pull-left p-r-10'>
                <em class='fa fa-bell-o noti-custom'></em>
              </div>
              <div class='media-body'>
                <h5 class='media-heading'>Updates</h5>
                <p class='m-0'>
                  <small>
                    There are
                    <span class='text-primary font-600'>2</span>
                    new updates available
                  </small>
                </p>
              </div>
            </div>
          </a>
          <!-- list item -->
          <a class='list-group-item' href='javascript:void(0);'>
            <div class='media'>
              <div class='pull-left p-r-10'>
                <em class='fa fa-user-plus noti-pink'></em>
              </div>
              <div class='media-body'>
                <h5 class='media-heading'>New student registered</h5>
                <p class='m-0'>
                  <small>You have 10 unread messages</small>
                </p>
              </div>
            </div>
          </a>
          <!-- list item -->
          <a class='list-group-item' href='javascript:void(0);'>
            <div class='media'>
              <div class='pull-left p-r-10'>
                <em class='fa fa-diamond noti-primary'></em>
              </div>
              <div class='media-body'>
                <h5 class='media-heading'>A new order has been placed A new order has been placed</h5>
                <p class='m-0'>
                  <small>There are new settings available</small>
                </p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class='list-group-item text-right' href='javascript:void(0);'>
            <small class='font-600'>See all notifications</small>
          </a>
        </li>
      </ul>
    </li>
    <li class='dropdown navbar-c-items'>
      <a aria-expanded='true' class='dropdown-toggle waves-effect waves-light profile' data-toggle='dropdown' href=''>
        <img alt='user-img' class='img-circle' src='https://yt3.ggpht.com/-EwMh7uSllo8/AAAAAAAAAAI/AAAAAAAAAAA/fNt15Y1I-5I/s900-c-k-no-rj-c0xffffff/photo.jpg'>
      </a>
      <ul class='dropdown-menu'>
        <li>
          <a href='javascript:void(0)'>
            <i class='ti-user text-custom m-r-10'></i>
            Profile
          </a>
        </li>
        <li>
          <a href='javascript:void(0)'>
            <i class='ti-settings text-custom m-r-10'></i>
            Settings
          </a>
        </li>
        <li>
          <a href='javascript:void(0)'>
            <i class='ti-lock text-custom m-r-10'></i>
            Lock screen
          </a>
        </li>
        <li class='divider'></li>
        <li>
          <a href='javascript:void(0)'>
            <i class='ti-power-off text-danger m-r-10'></i>
            Logout
          </a>
        </li>
      </ul>
    </li>
    </ul>
    <div class='menu-item'>
    <!-- Mobile menu toggle -->
    <a class='navbar-toggle'>
      <div class='lines'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
    <!-- End mobile menu toggle -->
    </div>
    </div>
    </div>
    </div>
    <nav>
    <div class='navbar-custom'>
    <div class='container'>
    <div id='navigation'>
    <!-- Navigation Menu -->
    <ul class='navigation-menu'>
      <li>
        <a href='#'><i class='md md-dashboard'></i>Home
        </a>
      </li>
      <li>
        <a href='admin-home.html'><i class='md md-dashboard'></i>Dashboard
        </a>
      </li>
      <li>
        <a href='admin-enroll-a-student.html'><i class='md md-color-lens'></i>Enroll a Student
        </a>
      </li>
      <li>
        <a href='admin-class-management.html'><i class='md md-layers'></i>Class Management
        </a>
      </li>
      <li>
        <a href='admin-student-list.html'><i class='md md-class'></i>Student List
        </a>
      </li>
      <li>
        <a href='admin-teacher-list.html'><i class='md md-pages'></i>Teacher List
        </a>
      </li>
      <li>
        <a href='admin-records-management.html'><i class='md md-color-lens'></i>Records Management
        </a>
      </li>
      <li>
        <a href='admin-transaction-management.html'><i class='md md-layers'></i>Transaction Management
        </a>
      </li>
      <li>
        <a href='admin-school-bus-scheduling.html'><i class='md md-class'></i>School Bus Scheduling
        </a>
      </li>
    </ul>
    <!-- End navigation menu -->
    </div>
    </div>
    <!-- end container -->
    </div>
    <!-- end navbar-custom -->
    <!-- End Navigation Bar -->
    </nav>
    </header>

    <div id='main-content' role='main'>
    <div class='wrapper'>
    <div class='container dashboard'>
    <!-- Page-Title -->
    <div class='row'>
    <div class='col-sm-12'>
    <div class='btn-group pull-right m-t-15'>
      <button aria-expanded='false' class='btn btn-default dropdown-toggle waves-effect waves-light' data-toggle='dropdown' type='button'>
        Settings
        <span class='m-l-5'>
          <i class='fa fa-cog'></i>
        </span>
      </button>
      <ul class='dropdown-menu' role='menu'>
        <li>
          <a href='#'>Action</a>
        </li>
        <li>
          <a href='#'>Another action</a>
        </li>
        <li>
          <a href='#'>Something else here</a>
        </li>
        <li class='divider'></li>
        <li>
          <a href='#'>Separated link</a>
        </li>
      </ul>
    </div>
    <h4 class='page-title'>
    @yield('title')
    </h4>
    <p class='text-muted page-title-alt'>School Statistics Overview</p>
    </div>
    </div>
    @yiedl('content')
    <footer>
    <footer class='footer text-right'>
    <div class='container'>
    <div class='row'>
    <div class='col-xs-6'>
    © 2016. All rights reserved.
    </div>
    <div class='col-xs-6'>
    <ul class='pull-right list-inline m-b-0'>
      <li>
        <a href='#'>About</a>
      </li>
      <li>
        <a href='#'>Help</a>
      </li>
      <li>
        <a href='#'>Contact</a>
      </li>
    </ul>
    </div>
    </div>
    </div>
    </footer>
    </footer>
    </div>
    <!-- End Footer -->
    <!-- jQuery -->
    <script src='assets/js/jquery.min.js'></script>
    <script src='assets/js/bootstrap.min.js'></script>
    <script src='assets/js/jquery.slimscroll.js'></script>
    <script src='assets/plugins/peity/jquery.peity.min.js'></script>
    <!-- jQuery -->
    <script src='assets/plugins/waypoints/lib/jquery.waypoints.js'></script>
    <script src='assets/plugins/counterup/jquery.counterup.min.js'></script>
    <script src='assets/plugins/morris/morris.min.js'></script>
    <script src='assets/plugins/raphael/raphael-min.js'></script>
    <script src='assets/plugins/jquery-knob/jquery.knob.js'></script>
    <script src='assets/plugins/chartist/js/chartist.min.js'></script>
    <script src='assets/plugins/chartist/js/chartist-plugin-tooltip.min.js'></script>
    <script src='assets/pages/jquery.chartist.init.js'></script>
    <script src='assets/pages/custom.js'></script>
    <script src="assets/pages/jquery.todo.js"></script>
    <script src='assets/js/jquery.core.js'></script>
    <script src='assets/js/jquery.app.js'></script>
    <script src="javascripts/graphs/admin.js?1476255734" type="text/javascript"></script><script src="javascripts/script.js?1476255799" type="text/javascript"></script>
  </body>
</html>

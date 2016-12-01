<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
    <meta name="author" content="Coderthemes">
    <!-- App Favicon icon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <!-- App Title -->
    <title>Teacher List</title>

    <!-- DataTables -->
    <link href="assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/buttons.bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/fixedHeader.bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/responsive.bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/scroller.bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/dataTables.colVis.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/dataTables.bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/plugins/datatables/fixedColumns.dataTables.min.css" rel="stylesheet" type="text/css"/>

    <!-- Plugins css-->
  <link href="assets/plugins/bootstrap-tagsinput/css/bootstrap-tagsinput.css" rel="stylesheet" />
  <link href="assets/plugins/switchery/css/switchery.min.css" rel="stylesheet" />
  <link href="assets/plugins/multiselect/css/multi-select.css"  rel="stylesheet" type="text/css" />
  <link href="assets/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/plugins/bootstrap-select/css/bootstrap-select.min.css" rel="stylesheet" />
  <link href="assets/plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css" rel="stylesheet" />

    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/core.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/components.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/pages.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/menu.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/responsive.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />

    <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <script src="assets/js/modernizr.min.js"></script>

  </head>
  <body>
    <!-- Navigation Bar-->
    <header id="topnav">
      <div class="topbar-main">
        <div class="container">
          <!-- Logo container-->
          <div class="logo">
            <a href="index.html" class="logo"><span>SchulerTrack</span></a>
          </div>
          <!-- End Logo container-->
          <div class="menu-extras">
            <ul class="nav navbar-nav navbar-right pull-right">
              <li class="navbar-c-items">
                <form role="search" class="navbar-left app-search pull-left hidden-xs">
                  <input type="text" placeholder="Search..." class="form-control" value="Search...">
                  <a href=""><i class="fa fa-search"></i></a>
                </form>
              </li>
              <li class="dropdown navbar-c-items">
                <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                  <i class="icon-bell"></i> <span class="badge badge-xs badge-danger">3</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg">
                  <li class="notifi-title"><span class="label label-default pull-right">New 3</span>Notification</li>
                  <li class="list-group slimscroll-noti notification-list">
                    <!-- list item-->
                    <a href="javascript:void(0);" class="list-group-item">
                      <div class="media">
                        <div class="pull-left p-r-10">
                          <em class="fa fa-bell-o noti-custom"></em>
                        </div>
                        <div class="media-body">
                          <h5 class="media-heading">Updates</h5>
                          <p class="m-0">
                            <small>There are <span class="text-primary font-600">2</span> new updates available</small>
                          </p>
                        </div>
                      </div>
                    </a>
                    <!-- list item-->
                    <a href="javascript:void(0);" class="list-group-item">
                      <div class="media">
                        <div class="pull-left p-r-10">
                          <em class="fa fa-user-plus noti-pink"></em>
                        </div>
                        <div class="media-body">
                          <h5 class="media-heading">New student registered</h5>
                          <p class="m-0">
                            <small>You have 10 unread messages</small>
                          </p>
                        </div>
                      </div>
                    </a>
                    <!-- list item-->
                    <a href="javascript:void(0);" class="list-group-item">
                      <div class="media">
                        <div class="pull-left p-r-10">
                          <em class="fa fa-diamond noti-primary"></em>
                        </div>
                        <div class="media-body">
                          <h5 class="media-heading">A new order has been placed A new order has been placed</h5>
                          <p class="m-0">
                            <small>There are new settings available</small>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="list-group-item text-right">
                      <small class="font-600">See all notifications</small>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown navbar-c-items">
                <a href="" class="dropdown-toggle waves-effect waves-light profile" data-toggle="dropdown" aria-expanded="true"><img src="https://yt3.ggpht.com/-EwMh7uSllo8/AAAAAAAAAAI/AAAAAAAAAAA/fNt15Y1I-5I/s900-c-k-no-rj-c0xffffff/photo.jpg" alt="user-img" class="img-circle"> </a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0)"><i class="ti-user text-custom m-r-10"></i> Profile</a></li>
                  <li><a href="javascript:void(0)"><i class="ti-settings text-custom m-r-10"></i> Settings</a></li>
                  <li><a href="javascript:void(0)"><i class="ti-lock text-custom m-r-10"></i> Lock screen</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)"><i class="ti-power-off text-danger m-r-10"></i> Logout</a></li>
                </ul>
              </li>
            </ul>
            <div class="menu-item">
              <!-- Mobile menu toggle-->
              <a class="navbar-toggle">
                <div class="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              <!-- End mobile menu toggle-->
            </div>
          </div>
        </div>
      </div>



    <div class="navbar-custom">
        <div class="container">
            <div id="navigation">
                <!-- Navigation Menu-->
                <ul class="navigation-menu">
                  <li><a href="#"><i class="md md-dashboard"></i>Home</a></li>
                  <li><a href="admin-home.html"><i class="md md-dashboard"></i>Dashboard</a></li>
                  <li><a href="admin-enroll-a-student.html"><i class="md md-color-lens"></i>Enroll a Student</a></li>
                  <li><a href="admin-class-management.html"><i class="md md-layers"></i>Class Management</a></li>
                  <li><a href="admin-student-list.html"><i class="md md-class"></i>Student List</a></li>
                  <li><a href="admin-teacher-list.html"><i class="md md-pages"></i>Teacher List</a></li>
                  <li><a href="admin-staff-list.html"><i class="md md-color-lens"></i>Staff List</a></li>
                  <li><a href="admin-transaction-management.html"><i class="md md-layers"></i>Transaction Management</a></li>
                  <li><a href="admin-school-bus-scheduling.html"><i class="md md-class"></i>School Bus Scheduling</a></li>
                  <li><a href="admin-event-list.html"><i class="md md-layers"></i>Event List</a></li>


                </ul>
                <!-- End navigation menu        -->
            </div>
        </div> <!-- end container -->
    </div> <!-- end navbar-custom -->
</header>
<!-- End Navigation Bar-->



<div class="wrapper">
    <div class="container">

<!-- Page-Title -->
<div class="row">
    <div class="col-sm-12">
        <div class="btn-group pull-right m-t-15">
            <button type="button" class="btn btn-default dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Settings <span class="m-l-5"><i class="fa fa-cog"></i></span></button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </div>

        <h4 class="page-title">Teacher List</h4>
        <ol class="breadcrumb">
            <li>
                <a href="#">Admin</a>
            </li>
            <li class="active">
                Teacher List
            </li>
        </ol>

    </div>
</div>
<section class="card-box">
  <div class="row">
      <div class="col-sm-8">
        <div class="form-group contact-search m-b-30">
            <input type="text" id="search" class="form-control" placeholder="Search...">
            <button type="submit" class="btn btn-white"><i class="fa fa-search"></i></button>
        </div>
      </div>

  </div>
  <div class="table-responsive ">
      <table class="table table-hover mails m-0 table table-actions-bar">
          <thead>
              <tr>
                  <th style="max-width: 95px;">
                  </th>
                  <th style="max-width: 95px;">
                  </th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Remarks</th>
              </tr>
          </thead>

          <tbody>
              <tr class="">
                <td>
                    1
                </td>
                  <td>
                      <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" class="img-circle thumb-sm" />
                  </td>

                  <td>
                      <a href="admin-teacher-profile.html">Dela Cruz, Mark</a>
                  </td>

                  <td>
                      02/07/09
                  </td>

                  <td>
                      <b><a href="" class="text-dark"><b>35</b></a> </b>
                  </td>

                  <td>
                      F
                  </td>

                  <td>
                      Absent
                  </td>
              </tr>
              <tr class="">
                <td>
                    2
                </td>
                  <td>
                      <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" class="img-circle thumb-sm" />
                  </td>

                  <td>
                      <a href="hr-teacher-profile.html">Dela Cruz, Mark</a>
                  </td>

                  <td>
                      02/07/09
                  </td>

                  <td>
                      <b><a href="" class="text-dark"><b>35</b></a> </b>
                  </td>

                  <td>
                      F
                  </td>
                  <td>
                      Absent
                  </td>
              </tr>
              <tr class="">
                <td>
                    3
                </td>
                  <td>
                      <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" class="img-circle thumb-sm" />
                  </td>

                  <td>
                     <a href="admin-teacher-profile.html">Dela Cruz, Mark</a>
                  </td>

                  <td>
                      02/07/09
                  </td>

                  <td>
                      <b><a href="" class="text-dark"><b>35</b></a> </b>
                  </td>

                  <td>
                      F
                  </td>
                  <td>
                      Absent
                  </td>
              </tr>
              <tr class="">
                <td>
                    4
                </td>
                  <td>
                      <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" class="img-circle thumb-sm" />
                  </td>

                  <td>
                      <a href="admin-teacher-profile.html">Dela Cruz, Mark</a>
                  </td>

                  <td>
                      02/07/09
                  </td>

                  <td>
                      <b><a href="" class="text-dark"><b>35</b></a> </b>
                  </td>

                  <td>
                      F
                  </td>
                  <td>
                      Absent
                  </td>
              </tr>
              <tr class="">
                <td>
                    5
                </td>
                  <td>
                      <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" class="img-circle thumb-sm" />
                  </td>

                  <td>
                      <a href="admin-teacher-profile.html">Dela Cruz, Mark</a>
                  </td>

                  <td>
                      02/07/09
                  </td>

                  <td>
                      <b><a href="" class="text-dark"><b>35</b></a> </b>
                  </td>

                  <td>
                      F
                  </td>
                  <td>
                      Absent
                  </td>
              </tr>





          </tbody>
      </table>

  </div>
</section>

      <!-- Footer -->
      <div class="container">
      <footer class="footer text-right">
        <div class="container">
          <div class="row">
            <div class="col-xs-6">
              © 2016. All rights reserved.
            </div>
            <div class="col-xs-6">
              <ul class="pull-right list-inline m-b-0">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        </div>
      <!-- End Footer -->
      </div> <!-- end container -->
    </div>
    <!-- end wrapper -->



        <!-- jQuery  -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/detect.js"></script>
        <script src="assets/js/fastclick.js"></script>
        <script src="assets/js/jquery.slimscroll.js"></script>
        <script src="assets/js/jquery.blockUI.js"></script>
        <script src="assets/js/waves.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/jquery.nicescroll.js"></script>
        <script src="assets/js/jquery.scrollTo.min.js"></script>

        <!-- bootstrap select  -->
        <script src="assets/plugins/bootstrap-select/js/bootstrap-select.min.js" type="text/javascript"></script>

        <script src="assets/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="assets/plugins/datatables/dataTables.bootstrap.js"></script>

        <script src="assets/plugins/datatables/dataTables.buttons.min.js"></script>
        <script src="assets/plugins/datatables/buttons.bootstrap.min.js"></script>
        <script src="assets/plugins/datatables/jszip.min.js"></script>
        <script src="assets/plugins/datatables/pdfmake.min.js"></script>
        <script src="assets/plugins/datatables/vfs_fonts.js"></script>
        <script src="assets/plugins/datatables/buttons.html5.min.js"></script>
        <script src="assets/plugins/datatables/buttons.print.min.js"></script>
        <script src="assets/plugins/datatables/dataTables.fixedHeader.min.js"></script>
        <script src="assets/plugins/datatables/dataTables.keyTable.min.js"></script>
        <script src="assets/plugins/datatables/dataTables.responsive.min.js"></script>
        <script src="assets/plugins/datatables/responsive.bootstrap.min.js"></script>
        <script src="assets/plugins/datatables/dataTables.scroller.min.js"></script>
        <script src="assets/plugins/datatables/dataTables.colVis.js"></script>
        <script src="assets/plugins/datatables/dataTables.fixedColumns.min.js"></script>

        <script src="assets/pages/datatables.init.js"></script>

        <!-- App core js -->
        <script src="assets/js/jquery.core.js"></script>
        <script src="assets/js/jquery.app.js"></script>

        <script type="text/javascript">
            $(document).ready(function () {
                $('#datatable').dataTable();
                $('#datatable-keytable').DataTable({keys: true});
                $('#datatable-responsive').DataTable();
                $('#datatable-colvid').DataTable({
                    "dom": 'C<"clear">lfrtip',
                    "colVis": {
                        "buttonText": "Change columns"
                    }
                });
                $('#datatable-scroller').DataTable({
                    ajax: "assets/plugins/datatables/json/scroller-demo.json",
                    deferRender: true,
                    scrollY: 380,
                    scrollCollapse: true,
                    scroller: true
                });
                var table = $('#datatable-fixed-header').DataTable({fixedHeader: true});
                var table = $('#datatable-fixed-col').DataTable({
                    scrollY: "300px",
                    scrollX: true,
                    scrollCollapse: true,
                    paging: false,
                    fixedColumns: {
                        leftColumns: 1,
                        rightColumns: 1
                    }
                });
            });
            TableManageButtons.init();

        </script>


    </body>
</html>

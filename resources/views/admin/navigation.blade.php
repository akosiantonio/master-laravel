@extends('layout')
@section('navigation')
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
@stop
@extends('layout.header.navigation.navigation')
 @section('content')
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-3">
                <div class="widget">
                  <div class="widget-body">
                    <div class="row">
                      <div class="col-md-12 col-sm-12 col-xs-12">
                        <a href="#" data-toggle="modal" data-target="#add-category" class="btn btn-lg btn-default btn-block waves-effect waves-light">
                          <i class="fa fa-plus"></i> Create New
                        </a>
                        <div id="external-events" class="m-t-20">
                          <br>
                          <p>Drag and drop your task or click in the calendar</p>
                          <div class="external-event bg-primary" data-class="bg-primary" style="position: relative;">
                            <i class="fa fa-move"></i>My task One
                          </div>
                          <div class="external-event bg-pink" data-class="bg-pink" style="position: relative;">
                            <i class="fa fa-move"></i>My task Two
                          </div>
                          <div class="external-event bg-info" data-class="bg-info" style="position: relative;">
                            <i class="fa fa-move"></i>My task Three
                          </div>
                          <div class="external-event bg-purple" data-class="bg-purple" style="position: relative;">
                            <i class="fa fa-move"></i>My task Four
                          </div>
                        </div>
                        <!-- checkbox -->
                        <div class="checkbox m-t-40">
                          <input id="drop-remove" type="checkbox">
                          <label for="drop-remove">
                            Remove after drop
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div> <!-- end col-->
                <div class="col-md-9">
                  <div class="card-box">
                    <div id="calendar"></div>
                  </div>
                  </div> <!-- end col -->
                  </div>  <!-- end row -->
                  <!-- BEGIN MODAL -->
                  <div class="modal fade none-border" id="event-modal">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title"><strong>Add Event</strong></h4>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-white waves-effect" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-success save-event waves-effect waves-light">Create event</button>
                          <button type="button" class="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Modal Add Category -->
                  <div class="modal fade none-border" id="add-category">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title"><strong>Add</strong> a category</h4>
                        </div>
                        <div class="modal-body">
                          <form role="form">
                            <div class="row">
                              <div class="col-md-6">
                                <label class="control-label">Category Name</label>
                                <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name"/>
                              </div>
                              <div class="col-md-6">
                                <label class="control-label">Choose Category Color</label>
                                <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                  <option value="success">Success</option>
                                  <option value="danger">Danger</option>
                                  <option value="info">Info</option>
                                  <option value="pink">Pink</option>
                                  <option value="primary">Primary</option>
                                  <option value="warning">Warning</option>
                                  <option value="inverse">Inverse</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-white waves-effect" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                 
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

          <script src="assets/plugins/jquery-ui/jquery-ui.min.js"></script>

          <!-- BEGIN PAGE SCRIPTS -->
          <script src="assets/plugins/moment/moment.js"></script>
          <script src='assets/plugins/fullcalendar/js/fullcalendar.min.js'></script>
          <script src="assets/pages/jquery.fullcalendar.js"></script>
          <script src="assets/pages/jquery.todo.js"></script>
          <script src='assets/js/jquery.core.js'></script>
          <script src='assets/js/jquery.app.js'></script>
          <script src="javascripts/script.js?1476255799" type="text/javascript"></script>
  @endsection
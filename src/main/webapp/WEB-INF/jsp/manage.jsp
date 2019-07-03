<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/7/3
  Time: 17:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>实名账户管理及隐私保护子系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- jQuery UI -->
    <link href="static/libs/jqueryui/jquery-ui.css" rel="stylesheet" media="screen">

    <!-- Bootstrap -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- styles -->
    <link href="css/styles.css" rel="stylesheet">

    <link href="css/stats.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="header">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <!-- Logo -->
                <div class="logo">
                    <h1><a href="">实名账户管理及隐私保护子系统</a></h1>
                </div>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-lg-12">

                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="navbar navbar-inverse" role="banner">
                    <nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">我的账户<b class="caret"></b></a>
                                <ul class="dropdown-menu animated fadeInUp">
                                    <li><a href=""> 个人设置</a></li>
                                    <li><a href="#" onclick="logout()">退出</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page-content">
    <div class="row">

        <div class="col-md-2">
            <div class="sidebar content-box" style="display: block;">
                <ul class="nav">

                    <li><a href="showStats.html"><i class="glyphicon glyphicon-home"></i> 首页</a></li>
                    <li class="current">
                        <a href="showAlerts.html">
                            <i class="glyphicon glyphicon-calendar" ></i> 安全预警

                        </a>


                    </li>

                    <li ><a href="showStats.html"><i class="glyphicon glyphicon-stats"></i>统计分析</a></li>



                </ul>
            </div>
        </div>


        <div class="col-md-10"  >
            <!--
              <div class="content-box-large">
                  <div class="panel-heading">
                    <div class="panel-title"> 账户实名化统计</div>

                    <div class="panel-options">
                        <a href="#" data-rel="collapse"><i class="glyphicon glyphicon-refresh"></i></a>
                        <a href="#" data-rel="reload"><i class="glyphicon glyphicon-cog"></i></a>
                    </div>
                </div>
                  <div class="panel-body">
                      <div id="hero-area" style="height: 230px;"></div>
                  </div>
              </div>
            -->
            <div class="content-box-large">
                <div class="panel-heading">



                </div>
                <div class="row">
                    <div class="col-md-3" id="Hint" style="height: 50px;">支付系统名称：
                        <select id="selectAppID" >
                            <option value ="001" select="true">贵州广电</option>

                        </select>
                    </div>
                    <div class="col-md-6" id="HintText" style="height: 50px;">
                    </div>
                </div>
            </div>

            <div class="content-box-large">
                <table class="table table-hover" id="alertTable">
                    <thead>
                    <tr>
                        <!--
                        //{"dataList":[{"alertTime":"2018-09-12 00:00:10","event":"绑定相同账户到不同实名信息","id":"1","operComment":"0","operFlag":"0","operTime":"","realNameID":"lly001","userTag":"lly001"},{"alertTime":"2018-09-12 00:00:10","event":"重复建立实名账户信息","id":"2","operComment":"0","operFlag":"1","operTime":"2018-09-12 00:00:10","realNameID":"lly002","userTag":"lly002"}],"totalPages":1,"totalRows":2}
                        -->
                        <th>序号</th>
                        <th>预警时间</th>
                        <th>事件</th>
                        <!--  <th>实名标识</th> -->
                        <th>账户名称</th>
                        <th>处理情况</th>
                        <th>处理时间</th>
                        <th>处理意见</th>
                    </tr>
                    </thead>
                    <!--
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>2018.1.10 10:00:00</td>
                        <td>已处理</td>
                        <td>2018.1.10 10:05:00</td>
                        <td>处理意见已处理</td>
                      </tr>
                      <tr class ="bg-danger">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>2018.1.10 10:00:00</td>
                       <td><span class="text-danger">未处理</span></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                         <td>2018.1.10 10:00:00</td>
                        <td>已处理</td>
                        <td>2018.1.10 10:05:00</td>
                        <td>处理意见已处理</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>2018.1.10 10:00:00</td>
                        <td>已处理</td>
                        <td>2018.1.10 10:05:00</td>
                        <td>处理意见已处理</td>
                      </tr>
                      <tr class ="bg-danger">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>2018.1.10 10:00:00</td>
                       <td><span class="text-danger">未处理</span></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                         <td>2018.1.10 10:00:00</td>
                        <td>已处理</td>
                        <td>2018.1.10 10:05:00</td>
                        <td>处理意见已处理</td>
                      </tr><tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>2018.1.10 10:00:00</td>
                        <td>已处理</td>
                        <td>2018.1.10 10:05:00</td>
                        <td>处理意见已处理</td>
                      </tr>
                      <tr class ="bg-danger">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>2018.1.10 10:00:00</td>
                       <td><span class="text-danger">未处理</span></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                         <td>2018.1.10 10:00:00</td>
                        <td>已处理</td>
                        <td>2018.1.10 10:05:00</td>
                        <td>处理意见已处理</td>
                      </tr>
                    </tbody>

                    -->

                </table>

                <div align="center">
                    <nav aria-label="Page navigation" >


                        <ul class="pagination"  id="pageNav">
                            <!--
                              <li>
                                <a href="#" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li  class="active"><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">3</a></li>
                              <li><a href="#">4</a></li>
                              <li><a href="#">5</a></li>
                              <li>
                                <a href="#" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                </a>
                              </li>
                              -->

                        </ul>
                    </nav>
                </div>


            </div>



        </div>




    </div>

</div>

<!--
    <footer >
         <div class="container" style=" margin-bottom:0" >

            <div class="copy text-center" >
               Copyright 2018 兴唐通信
            </div>

         </div>
      </footer>
-->



<!-- jQuery (necessary for Bootstrap's JavaScript plugins)-->
<script src="https://code.jquery.com/jquery.js"></script>
<!-- jQuery UI -->
<script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

<script type="text/javascript" src="static/libs/jquerycookie/jquery.cookie.js"></script>
<!-- 	<script type="text/javascript" src="static/libs/jqueryui/jquery-ui.js"></script>

Include all compiled plugins (below), or include individual files as needed -->


<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="vendor/morris/morris.css">


<script type="text/javascript" src="vendor/jquery.knob.js"></script>
<script type="text/javascript" src="vendor/raphael-min.js"></script>
<script type="text/javascript" src="vendor/morris/morris.min.js"></script>

<script type="text/javascript" src="vendor/flot/jquery.flot.js"></script>
<script type="text/javascript" src="vendor/flot/jquery.flot.categories.js"></script>
<script type="text/javascript" src="vendor/flot/jquery.flot.pie.js"></script>
<script type="text/javascript" src="vendor/flot/jquery.flot.time.js"></script>
<script type="text/javascript" src="vendor/flot/jquery.flot.stack.js"></script>
<script type="text/javascript" src="vendor/flot/jquery.flot.resize.js"></script>

<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/alerts.js"></script>



</body>
</html>


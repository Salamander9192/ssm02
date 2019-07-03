<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="static/res/favicon.ico">
    <title>实名账户管理及隐私保护子系统演示应用--登录页面</title>
    <link rel="stylesheet" href="static/libs/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="static/css/admin.css">
    <link rel="stylesheet" href="static/css/signin.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">欢迎登录</h3>
                </div>
                <div class="panel-body">
                    <form role="form" id="formLogin" action="" method="post" >
                        <fieldset>
                            <div class="form-group">
                                <label for="inputUsername">用户名</label>
                                <input type="text" id="inputUsername" name="inputUsername" class="form-control" placeholder="用户名" required="" autofocus="">
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">密码</label>
                                <input type="password" id="inputPassword" name="inputPassword" class="form-control" placeholder="密码" required="">
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="cbRemberme" name="cbRemberme" value="1">记住密码
                                </label>
                            </div>
                            <div id="infoArea"></div>
                            <!-- Change this to a button or input when using this as a form -->
                            <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="submitForm()" >登录</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>

    function submitForm(){

        var form = document.getElementById('formLogin');
        //form.submit();
        var ip = "192.168.1.140:8080";
        var userName = 	document.getElementById('inputUsername').value;
        var pwd = document.getElementById('inputPassword').value;
        var url = ip+"/login";

        form.action = "<%=basePath %>testLogin";
        form.method = "post";
        form.submit();

        // $.ajax({
        //     type : "POST",
        //     url: url,
        //     data:{"username":"peng","password":"123445"},
        //     dataType : "json",
        //
        //     success : function (data) {
        //         //console.log(data);
        //         console.log(data.token);
        //         if(data.token!=null)
        //         {
        //             $.cookie('token', data.token);
        //             window.location.href='ShowStats.html';
        //         }
        //     }
        // });

    }



</script>
<script type="text/javascript" src="static/libs/jquery/jquery-1.11.3.js"></script>

<script type="text/javascript" src="static/libs/jquerycookie/jquery.cookie.js"></script>
<script type="text/javascript" src="static/libs/jqueryform/jquery.form.js"></script>
<script type="text/javascript" src="static/libs/bootstrap/bootstrap.js"></script>
<script type="text/javascript" src="static/js/md5.js"></script>
<script type="text/javascript" src="static/js/pub.js"></script>
<script type="text/javascript" src="static/js/signin.js"></script>

</body>
</html>

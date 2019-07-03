/**
 * Created by liuriu on 15-12-8.
 */
function onFormLoginSubmit(){
    //alert("here");
    var formLogin = $("#formLogin");
    var inputUsername = $("#inputUsername");
    var inputPassword = $("#inputPassword");
    var cbRemberme = $("#cbRemberme");

    var username = inputPassword.val();
    var password = inputUsername.val();
    var remberme = cbRemberme.val();
    //alert(username+":"+password+":"+remberme);
    // do something to check the value

    // get the digest value of inputPassword and pass the value to the back
    var md5password = hex_md5(password);
    inputPassword.val(md5password);
}

$(function () {
    var URL = "/shebao";
    $('#formLogin').ajaxForm({
        success: function (data) {
            if (data.result) {
                location.href = data.url;
            } else {
                showErrorInfo("#infoArea", '用户名或密码错误');
                $("#inputPassword").val('');
            }
        },
        error: function () {
            showErrorInfo("#infoArea", '服务器开小差了...');
            $("#inputPassword").val('');
        },
        dataType: 'json',
        type: 'post',
        timeout: 5000,
        url: URL + '/login'
    });
});
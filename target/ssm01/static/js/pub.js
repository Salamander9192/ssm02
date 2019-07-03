/**
 * Created by hy1 on 2015/12/15.
 */


function onBtnModalSuc(modalName, strUrl, valField, type, rstDiv){
    // 隐藏模态框
    $(modalName).modal('hide');
    // 请求查询数据并更新通知区域
    var val = $(valField).val();
    $.ajax({
        url: strUrl,
        timeout: 5000,
        type: 'post',
        data:{
            cdSid: val,
            cdType: type
        },
        dataType: 'json',
        success: function(data){
            defaultCbSuccessFunc(data, '#', rstDiv);
        },
        error: function(){
            showErrorInfo(rstDiv, '服务器开小差了，请稍后再试！');
        }
    });

}

function showErrorInfo(divid, info){
    $(divid).html(
        ''
    );
    $(divid).html(
        '<div class="alert alert-dismissable alert-danger text-center">' +
        '   <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times; </button>' +
        info +
        '</div>'
    );
}

function showInfo(divid, info){
    $(divid).html(
        ''
    );
    $(divid).html(
        '<div class="alert alert-dismissable alert-info text-center">' +
        '   <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times; </button>' +
        info +
        '</div>'
    );
}

function formAjaxSummit(form, url, alertid, cbSuccess, cbError, tm){
    cbSuccess = cbSuccess || defaultCbSuccessFunc;
    cbError = cbError || defaultCbErrorFunc;
    tm = tm || 3000; // 30s
    $(form).ajaxSubmit({
        success: function(data){
            cbSuccess.call(this, data, form, alertid);
        },
        error: function(){
        },
        dataType: 'json',
        type: 'post',
        timeout: tm,
        url: url
    });
}

function formAjaxSummitWithExtraData(form, url, alertid, cbSuccess, cbError, extraData, tm){
    cbSuccess = cbSuccess || defaultCbSuccessFunc;
    cbError = cbError || defaultCbErrorFunc;
    tm = tm || 3000; // 30s
    $(form).ajaxSubmit({
        success: function(data){
            cbSuccess.call(this, data, form, alertid);
        },
        error: function(){
            cbError.call(this, form, alertid);
        },
        dataType: 'json',
        type: 'post',
        timeout: tm,
        url: url,
        data:extraData
    });
}
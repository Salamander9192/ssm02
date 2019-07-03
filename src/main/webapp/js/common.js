var ip = "http://192.168.1.142:8000";

//获取appIDlist并保存到Cookie中
function getAndSaveAppList(ip,appIDSelect)
{
	var appIDListStr = $.cookie('appIDListStr');
 console.log(appIDListStr);
	if(appIDListStr==null || appIDListStr=="" )
	{
			var appListUrl = ip+"/realnamemng/mng/app_list";

			$.ajax({
									 type: "GET",
									 url: appListUrl,
									 crossDomain: true,
									 dataType: "json",

									 beforeSend: function (xhr) {
											 xhr.setRequestHeader('Authorization', "Bearer " + $.cookie('token'));
									 },
									 success: function(data){//[{ appId: "001", appName: "甘肃广电" }]
											console.log("in function getAndSaveAppList:");
											console.log(data);
											console.log(JSON.stringify(data));
											var stringData = JSON.stringify(data);

											$.cookie('appIDListStr', stringData);
											 showAppListHtml(data,appIDSelect)

									 }


					});
			}
			else {
				console.log("$.cookie('appIDListStr')不为空");
				if(appIDListStr!=null)
				{
					var appIDListJson = JSON.parse(appIDListStr);
					showAppListHtml(appIDListJson,appIDSelect);//显示appList
				}
			}
}

//显示appList html部分,传入要显示的data，data为JSON对象
function showAppListHtml(data,appIDSelect)//[{ appId: "001", appName: "甘肃广电" }]
{
	//console.log("22222222222"+data.length)
	$("#selectAppID").html("");
	for(var i=0;i<data.length;i++){
		var temp = "";
		if(data[i]["appId"]==appIDSelect)
		{
			temp=" select='true' ";
		}

		var show = "<option value = '"+data[i]["appId"]+"'"+temp+ ">"+data[i]["appName"]+"</option>";
		console.log(show);
		$("#selectAppID").append(show);
	}
}


//退出登录
function logout()
{
		$.cookie('token', "");
		$.cookie('appIDListStr', "");
	 	window.location.href='login.html';
}

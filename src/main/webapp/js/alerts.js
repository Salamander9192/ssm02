


		var token = $.cookie('token');

		var alertListUrl = ip+"/realnamemng/mng/alertinfo_page_list";
		var alertUndealUrl =  ip+"/realnamemng/mng/alertinfo_page_undeal_list";
		var data = {"dataList":[{"alertTime":"2018-09-12 00:00:10","event":"伪实名信息","id":"1","operComment":"","operFlag":"0","operTime":"","realNameID":"lly001","userTag":"lly001"},{"alertTime":"2018-09-12 00:00:10","event":"伪实名信息","id":"2","operComment":"已处理","operFlag":"1","operTime":"2018-09-12 00:10:10","realNameID":"lly002","userTag":"lly002"}],"totalPages":1,"totalRows":2,"totalUndealRows":1};
		
		var showUndeal = false; //是否单独显示未处理

		var pageNumber = 1; //当前页码
		var temp = GetUrlParam("pageNum");
		if(temp != ""){
			pageNumber = parseInt(temp);
		}

		var pageSize = 10; //每页显示条数

		var showUndeal = false; //是否单独显示未处理
		temp = GetUrlParam("showUndeal");
		if(temp != "" && temp==true ){
			showUndeal = true;
		}

		var AppID = "001"; //对应的系统
		temp = GetUrlParam("AppID");
		if(temp != ""){
			AppID = temp;
		}
		var appIDSelect= AppID;
		var dataList;

		//显示App下拉列表
	//	getAndSaveAppList(ip,appIDSelect);

		//showAlerts(showUndeal);
		
		showtables(data,false);
		

function showAlerts(showUndeal)
{
		if(showUndeal==false)
		{ 	//显示预警信息
			showAllAlerts();
		}
		else {
			showUndealAlerts();
		}

}



		function showUndealAlerts()
		{
			$.ajax({
	                    type: "POST",
	                    url: alertUndealUrl,
											data:{"pageNum":pageNumber,"pageSize":pageSize,"AppID":AppID},
	                    crossDomain: true,
	                   dataType: "json",

	                    beforeSend: function (xhr) {
	                        xhr.setRequestHeader('Authorization', "Bearer " + $.cookie('token'));
	                    },
	                    success: function(data){//{"dataList":[{"alertTime":"2018-09-12 00:00:10","event":"绑定相同账户到不同实名信息","id":"1","operComment":"0","operFlag":"0","operTime":"","realNameID":"lly001","userTag":"lly001"},{"alertTime":"2018-09-12 00:00:10","event":"重复建立实名账户信息","id":"2","operComment":"0","operFlag":"1","operTime":"2018-09-12 00:00:10","realNameID":"lly002","userTag":"lly002"}],"totalPages":1,"totalRows":2}
												console.log(data);
												showtables(data,true);
										}

	      });
		}

		function showAllAlerts()
		{
			
			$.ajax({
	                    type: "POST",
	                    url: alertListUrl,
											data:{"pageNum":pageNumber,"pageSize":pageSize,"AppID":AppID},
	                    crossDomain: true,
	                   dataType: "json",
	                    // headers: {
	                    //     "Authorization": data.token,
	                    //     "test": "test"
	                    // },
	                    beforeSend: function (xhr) {
	                        xhr.setRequestHeader('Authorization', "Bearer " + token);
	                    },
	                    success: function(data){//{"dataList":[{"alertTime":"2018-09-12 00:00:10","event":"绑定相同账户到不同实名信息","id":"1","operComment":"0","operFlag":"0","operTime":"","realNameID":"lly001","userTag":"lly001"},{"alertTime":"2018-09-12 00:00:10","event":"重复建立实名账户信息","id":"2","operComment":"0","operFlag":"1","operTime":"2018-09-12 00:00:10","realNameID":"lly002","userTag":"lly002"}],"totalPages":1,"totalRows":2}
												showtables(data,false);
						},
						fail: function () {
							
												showtables(data,false);
						}

	      });
		}

	function showtables(data,showUndeal)
	{
		dataList = data["dataList"];
		console.log(data);

		$(document).ready(function(e){
			if(showUndeal)
			{
				$('#HintText').html('该支付系统中共包含：未处理预警 ' +data["totalUndealRows"]+' 条。<a onclick="showAllAlerts()">显示全部<a>');
			}
			else {
				$('#HintText').html('该支付系统中共包含：预警信息 '+data["totalRows"]+' 条，其中未处理 ' +data["totalUndealRows"]+' 条。<a onclick="showUndealAlerts()">只显示未处理<a>');
			}

		});


		$("#alertTable").append("<tbody>");
		$("#alertTable tbody").html("");
		var counter = (pageNumber-1)*pageSize;

		for(var i=0;i<data["dataList"].length;i++) {
			counter++;
			var tbBody = ""
			var trColor;
			var operFlag = "0";

			if(dataList[i]["operFlag"] == operFlag){
				trColor = "bg-danger";
				operFlag = "<a onclick='showDiv("+dataList[i]["id"]+")'><span class='text-danger'>未处理</span></a>";


				var div = "<div id='deal"+dataList[i]["id"]+"' style='background-color:white;' hidden='true'>  "+
				"处理意见："+"<input id='input"+dataList[i]["id"]+"' value='账户风险已处理'>  &nbsp; <button type='submit' class='btn btn-default' onclick=dealAlert("+dataList[i]["id"]+")>提交</button> &nbsp; <button type='submit' class='btn btn-default' onclick='hideDiv("+dataList[i]["id"]+")'>暂不处理</button>"
				+
				"</div>";

				operFlag += div;
				//console.log(operFlag);
			}
			else
			{
				trColor = "";
				operFlag = "已处理";
			}

					/*<th>序号</th>
					<th>预警时间</th>
					<th>事件</th>
					<th>实名标识</th>
					<th>账户名称</th>
					<th>处理情况</th>
					<th>处理时间</th>
					<th>处理意见</th>*/

			tbBody += "<tr class='" + trColor + "'>"+
					"<th scope='row'>"+counter+"</th>"+
					 "<td>"+dataList[i]["alertTime"]+"</td>"+
					"<td>"+dataList[i]["event"]+"</td>"+
			//"<td>"+dataList[i]["realNameID"]+"</td>"+ 
				 "<td>"+dataList[i]["userTag"]+"</td>"+
					"<td>"+operFlag+"</td>"+
					"<td>"+dataList[i]["operTime"]+"</td>"+
					"<td>"+dataList[i]["operComment"]+"</td></tr> ";

			console.log(tbBody);

			$("#alertTable").append(tbBody);

			}
			 $("#alertTable").append("</tbody>");




			 //处理分页部分

			var totalPages= data["totalPages"];
			var totalRows = data["totalRows"];

			 var pageView = "";

			$("#pageNav").html("");

			var unDeal = "";
			if(showUndeal==true)
			{
				unDeal = "&showUndeal=true ";
			}
			//第一页
			if(pageNumber>1){
				 pageView += "<li>	<a href='showAlerts.html?AppID="+AppID+"&pageNum="+(pageNumber-1)+unDeal+"' aria-label='Previous'>	<span class='glyphicon glyphicon-step-backward' aria-hidden='true'></span></a></li>";
			}

			for(var i=2;i>0;i--)
			{
				if(pageNumber-i>0){
					 pageView += "<li><a href='showAlerts.html?AppID="+AppID+"&pageNum="+(pageNumber-i)+unDeal+"'>"+(pageNumber-i)+"</a></li>";
				}
			}
			 pageView += "<li  class='active'><a  href='#'>"+pageNumber+"</a></li>";

			 for(var i=1;i<3;i++)
			{
				if((pageNumber+i)<=totalPages){
					 pageView +=  "<li><a  href='showAlerts.html?AppID="+AppID+"&pageNum="+(pageNumber+i)+unDeal+"'>"+(pageNumber+i)+"</a></li>";
				}
			}


			//最后一页
			if(pageNumber<totalPages){
					 pageView += "<li>	<a href='showAlerts.html?AppID="+AppID+"&pageNum="+totalPages+unDeal+"' aria-label='Next'>	<span class='glyphicon glyphicon-step-forward' aria-hidden='true'></span>	</a></li>";
			}

			 $("#pageNav").append(pageView);

		}


	  //显示处理警告div
	 function showDiv(id)
	{
		var divID = "#deal"+id;
		$(divID).show();
	}
	    //关闭处理警告div
	 function hideDiv(id)
	{
		var divID = "#deal"+id;
		$(divID).hide();
	}

	//处理警告
	function dealAlert(id)
	{
		console.log("处理警告"+id);
		var divID = "#deal"+id;
		var inputID = "#input"+id;


		var inputValue = $(inputID).val();	//对应输入框的内容

		$(divID).hide(); //关闭处理警告div

		$.ajax({
			type: "POST",
			url: ip+"/realnamemng/mng/update_alertinfo",
			data: {"alertId":id,"deal":inputValue},
			dataType: "json",
			beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', "Bearer " + token);
            },
			success: function(data){//Object { desc: "处理完成", result: "1" }
				console.log(data);
				if(data["result"]=="1")
				{
					//alert("预警处理成功！");
				}else
				{
					alert("处理失败! "+data["desc"]);
				}
				showAlerts();
			},
			fail: function (err, status) {
				console.log(err)
			}
		});



	}



	function GetUrlParam(paraName) {
　　　　var url = document.location.toString();
　　　　var arrObj = url.split("?");

　　　　if (arrObj.length > 1) {
　　　　　　var arrPara = arrObj[1].split("&");
　　　　　　var arr;

　　　　　　for (var i = 0; i < arrPara.length; i++) {
　　　　　　　　arr = arrPara[i].split("=");

　　　　　　　　if (arr != null && arr[0] == paraName) {
　　　　　　　　　　return arr[1];
　　　　　　　　}
　　　　　　}
　　　　　　return "";
　　　　}
　　　　else {
　　　　　　return "";
　　　　}
　　}

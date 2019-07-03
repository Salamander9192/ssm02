

	var obj = document.getElementById("selectAppID"); //定位id
//	var index = obj.selectedIndex; // 选中索引
//	var app_id = obj.options[index].value; // 选中值
//	'var ip = "http://192.168.1.142:8000";' //移到common.js
	var url = ip+"/realnamemng/mng/dashboard";
	var appListUrl = ip+"/realnamemng/mng/app_list";







	//这种方式好用
	//$.getJSON("https://api.douban.com/v2/book/search?q=javascript&count=1&callback=?", function(data){
                //console.log(data);
    // });

	//获取appID列表/realnamemng/mng/app_list
	var appIDSelect = "001";

	//显示applist
//	getAndSaveAppList(ip,appIDSelect);
	var data = {"user_amount":15200,"realname_user_amount":12000,"month":[{date: "201801", total: 1224}, {date: "201802", total: 1025},{date: "201803", total: 2400}, {date: "201804", total: 1350},{date: "201805", total: 2324}, {date: "201806", total: 1525}]};
	showData(data);

 /*   $.ajax({
        type : "GET",
        url : url,
				data:{"app_id":appIDSelect},

				crossDomain: true,
        dataType: "json",
                    // headers: {
                    //     "Authorization": data.token,
                    //     "test": "test"
                    // },
        beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization', "Bearer " +  $.cookie('token'));
        },


        success : function (data) {
					showData(data);

			}



    });
	*/
	
		function showData(data){
			
							var jsonValue = data
					 console.log(jsonValue);

				 if(jsonValue["user_amount"]!=null)
				{

				 $(document).ready(function(e){
						$('#HintText').html('支付系统支付用户数量：'+jsonValue["user_amount"]+'    &nbsp; &nbsp;&nbsp;&nbsp;实名化支付用户数量：'+jsonValue["realname_user_amount"]);
					})


				var compare = function (prop) { //按数组的某一个元素排序 var arr = [{name: "zlw", age: 24}, {name: "wlz", age: 25}];
						return function (obj1, obj2) {
							var val1 = obj1[prop];
							var val2 = obj2[prop];
							if (val1 < val2) {
								return -1;
							} else if (val1 > val2) {
								return 1;
							} else {
								return 0;
							}
						}
				};

			//	jsonValue["month"].sort(compare("date"))


				Morris.Bar({
					element: 'hero-bar',
					data: jsonValue["month"],
					xkey: 'date',
					ykeys: ['total'],
					labels: ['实名用户量'],
					barRatio: 0.4,
					xLabelMargin: 10,
					hideHover: 'auto',
					barColors: ["#3d88ba"]
				});


				var realNameRate =  Math.round((jsonValue["realname_user_amount"]  * 100/ jsonValue["user_amount"])*100)/100; //Math.round(jsonValue["realname_user_amount"] / jsonValue["user_amount"] * 100)
				console.log(jsonValue["realname_user_amount"]  * 100/ jsonValue["user_amount"]);

				var notRealNameRate = 100-realNameRate;
				console.log(realNameRate);
				// Morris Donut Chart
				Morris.Donut({
					element: 'hero-donut',
					data: [
						{label: '已实名', value: realNameRate },
						{label: '未实名', value: notRealNameRate},

					],
					colors: ["#30a1ec", "#c4dafe"],
					formatter: function (y) { return y + "%" }
				});

				}
			
		}

//localhost:8000/realnamemng/ws/

var ws = new WebSocket("ws://192.168.1.142:8000/realnamemng/ws/user");

ws.onopen = function(evt) {
  console.log("Connection open ...");
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
//  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};


// Build jQuery Knobs
$(".knob").knob();

function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

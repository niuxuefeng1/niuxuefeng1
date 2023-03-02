<!--
	By:JmwPower
	Copy:https://github.com/JMWpower/xiaojiejie
	Copy:https://gitee.com/JmwPower/xiaojiejie
	温馨提示：本页面仅供学习参考，请勿分享传播商用，请您在下载后的24H进行删除！本项目开源，请勿在源码分享站点付费下载。
	以上信息使用时请保留，谢谢！Thanks♪(･ω･)ﾉ
-->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="google" value="notranslate">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<meta name=author content="Jmw-Power`top|JmwPower">
<meta name=description content="Jmw-Power`top|小姐姐 优质短视频播放小站，仿短视频App播放操作模式，网页版无需安装APP，即开即用，可登录收藏你所喜欢的小姐姐视频！温馨提示：本页面仅供学习参考，请勿分享传播商用，请您在下载后的24H进行删除！本项目开源，请勿在源码分享站点付费下载。">
<meta name=keywords content="xiaojiejie, xjj, 小姐姐, 抖音, 快手, 福利, Jmw-Power`top, JmwPower">
<link rel="icon" type="image/x-icon" href="favicon.ico" />
<link rev="made" href="https://github.com/JMWpower/xiaojiejie">
<link rev="made" href="https://gitee.com/JmwPower/xiaojiejie">
<title>JMW-|-小姐姐</title>
<script type="text/javascript">
	if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) { window.location.href = "pc.html"; }//不是移动设备，跳转
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?86194243b3d0dc98474adb8d6755d003";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style type="text/css">
@charset "utf-8";
@font-face{font-family:electronicFont;src:url(./css/DS-DIGIT.TTF)}
*{
    margin: 0px; 
    padding: 0px;
    touch-action: auto;/*触控事件*/
    text-align: center;
}
.app{
    width: 100vw; 
    height: 100vh; 
    position: absolute; /*定位类型：绝对定位*/
    margin: 0;
    overflow: hidden;/*内容溢出：被修剪，且其余内容不可见*/
    background-color: #ffffff;
}
#player{
    width: 100%;
    height: 100%;
    object-fit: cover; /*内容保持原比例，内容被裁剪*/
    object-position: center center;/*指定 image 或 video 在容器中的位置*/
    z-index: 333;/*显示在最顶层*/
}
video::-internal-media-controls-download-button {
    display:none;
}
video::-webkit-media-controls-enclosure {
    overflow:hidden;
}
video::-webkit-media-controls-panel {
    width: calc(100% + 30px); 
}
</style>
<body>
    <div class="app" ontouchmove="return false;">
        <video id="player" src="demo.mp4" autoplay preload mutedNew webkit-playsinline='true' playsinline='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true' poster="./img/bg.jpg"></video>
        <!--[autoplay:自动播放] [mutedNew：初始化静音][mutedNew：初始化静音][webkit-playsinline|playsinline:IOS微信浏览器支持小窗内播放]
        	[preload:预加载][x5-video-player-type:启用同层H5播放器，就是在视频全屏的时候，div可以呈现在视频层上,方便延续触控操作]
	        [x5-video-player-fullscreen:全屏设置。它又两个属性值，ture和false，true支持全屏播放，false不支持全屏播放][poster:背景图片]-->
    </div>

    <div style="position:absolute;top:30vh;width:100vw;height:auto;text-align:center;z-index:666;" id="logo_img">
        <img src="logoc.png" style="width:70vw;height: auto;text-align:center;">
    </div>

    <div style="position:absolute;top:5vh;width:100vw;height:auto;text-align:center;z-index:666;display:none;" id="logo_imgs">
    	<img src="logoc.png" style="width:70vw;height: auto;text-align:center;">
    </div>
    
    <div style="position:absolute;top:2vh;left:2vw;width:20vw;height:auto;z-index:999;">
        <img src="logod.png" style="width:100%;height:auto;">
    </div>

    <div id="msgs">
        <span style="position:absolute;top:50px;left:10px;color:#fff;font-size:10px;">点击按钮选择【连续】/【循环】模式</span>
        <span style="position:absolute;top:65px;left:10px;color:#fff;font-size:10px;">屏幕右滑显示提示文字</span>
        <span style="position:absolute;top:80px;left:10px;color:#fff;font-size:10px;">屏幕左滑隐藏提示文字</span>
        <span style="position:absolute;top:95px;left:10px;color:#fff;font-size:10px;">屏幕上滑切换下一个</span>
        <span style="position:absolute;top:110px;left:10px;color:#fff;font-size:10px;">屏幕下滑切换上一个</span>
        <span style="position:absolute;top:125px;left:10px;color:#fff;font-size:10px;">点击换源切换数据源</span>
        <span style="position:absolute;top:140px;left:10px;color:#fff;font-size:10px;">点击爱心按钮收藏</span>
        <span style="position:absolute;top:155px;left:10px;color:#fff;font-size:10px;">单击播放/暂停</span>
        <span style="position:absolute;top:170px;left:10px;color:#fff;font-size:10px;">双击进入全屏</span>
    </div>

    <div id="texts" style="color:#ffffff;">
        <span style="position:absolute;bottom:42px;left:10px;;font-size:1.25rem;" id="userid">@Jmw`Power</span>
        <span style="position:absolute;bottom:5px;left:10px;font-size:9px;">本程序仅作研究学习演示，数据采集自网络<br>原作者拍摄创作不易，请勿下载传播<br><span style="color:red;font-size:6px;" id="msg">JMW-|-正在努力加载环境中，请稍候！</span></span>
    </div>

    <span style="position:absolute;top:5px;right:10px;font-family:electronicFont;color:#fff;font-size:1.2rem;" id="time">00:00:00</span>

    <div id="buttons" style="position:absolute;bottom:150px;right:10px;z-index:999">
        <button id="auto_btn" style="border-radius:20px;width:32px;height:32px;">循环</button>
        <br><br><br>
        <button id="yuan" style="border-radius:20px;width:48px;height:32px;">换源</button>
        <br><br><br>
        <button style="border-radius:20px;width:48px;height:32px;" onclick="pass();">PASS</button>
        <br><br><br>
        <img style="border-radius:10px;width:32px;height:32px;" src="./img/love.png" title="点击添加收藏" id="love_btn"/>
    </div>

</body>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/layer.min.js"></script>
<script>
$(document).ready(function(){
    setInterval('var hour = new Date().getHours();var minutes = new Date().getMinutes();var seconds = new Date().getSeconds();if( hour < 10 ){ hour = "0"+hour; }if( minutes < 10 ){ minutes = "0"+minutes; }if( seconds < 10 ){ seconds = "0"+seconds; }$("#time").html(hour+":"+minutes+":"+seconds);', 1000);
    setTimeout(function(){$("#msgs").hide();},10000);
	layer.msg('加载环境中，请稍候！');
    auto = false;//循环播放模式
    textstf = true;//用户信息显示状态
    gi = 1;//初始化GET链接序号
    gi_max = 3;//最大GET链接序号
    vdnum = 0;//初始化GET链接数量
    url = "./get/get1.php";
    vdurlold = new Array("demo.mp4");
    vdurl_arr = new Array("demo.mp4");
    player = document.getElementById("player");
    players();
    layer.msg('页面加载完毕，点击屏幕开始播放！', {
	    btn: ['进入全屏', '就这样看'],yes:function(){
	    	toggleFullScreen();layer.closeAll();player.play();
	    }
	});
    //用户账号缓存
    var user = $.cookie('user');
    if (user != null) {
        $("#userid").html('@'+user);
    } else {
        $("#userid").html('@Jmw-Power');
    }
    //播放结束事件
	player.onended = function() {
	    if (auto == false) {//播放结束，执行重播！
	        player.play();
	    } else {//播放结束，重新获取数据！
	        pass();
	        $("#msg").html("播放完毕，正在重新加载中，请稍候！");
	    }
	}
});
//播放模式选择
$("#auto_btn").on("click", function(){
    auto = !auto;console.log(auto);
    this.innerText = (auto ? '连播' : '循环');
});
//收藏按钮事件
$("#love_btn").on("click", function(){
	user = $.cookie('user');
    if (user == null) {
    	login();
	} else {
		$.post("post.php",{userid:user,datastr:vdurl},function(love_data,status){
			love_data = JSON.parse(love_data);
			if (love_data.status == "YES") {
				$("#love_btn").attr('src','./img/loves.png');
				layer.msg(love_data.message);
		    }else{
		    	layer.msg(love_data.message, {icon: 5});
			}
		});
	}
});
//点击用户名事件
$("#userid").on("click", function(){
    user = $.cookie('user');
    if (user == null) {
    	login();
    } else {
        $.removeCookie('user'); //删除cookie
        $("#userid").html("@Jmw-Power");
        layer.msg("亲，您已退出登录了哟！", {icon: 0});
    }
});
//播放源按钮事件
$("#yuan").on("click", function(){
	user = $.cookie('user');
	if (gi < gi_max) {//小于最大链接序号，持续增加序号值
		gi++;
		this.innerText = "源00" + gi;//置播放源名称
		if (gi>9) {this.innerText = "源0" + gi;}//大于9，缺省0
        if (gi==2) {this.innerText = "JSON源";}//自定义名称
        if (user != null) {//登录状态,添加USER信息鉴权
			url = "./get/get" + gi + ".php?user=" + user;
		} else {//非登录状态
			url = "./get/get" + gi + ".php";
		}
	} else if (gi = gi_max) {//等于最大链接序号，初始化序号值
		if (user != null) {//登录状态显示收藏源
			gi = 0;url = ("./get/get.php?user=" + user);
			this.innerText = "收藏";
		} else {//非登录状态，显示推荐源
			gi = 1;url = "./get/get" + gi + ".php";
    		this.innerText = "精品源";
		}
	}
});
//PASS切换事件
function pass(){
	setTimeout(function () {
		players(); 
	}, 257);
}

//GET播放链接
function players() {
	vdurl="demo.mp4";
	if (player.readyState > 2) {//（audio/video）元素的就绪状态
		if(player.played.end(0) > 5){//观看时长大于 5 秒，添加历史记录
			vdurlold.unshift(player.currentSrc);
			console.log(vdurlold);
		}
	}
	layer.msg('正在努力加载中···', {icon: 16,shadeClose: true,});
    if (vdnum != 0) {
        $("#logo_img").hide();
        $("#msgs").hide();
        $("#logo_imgs").show();
    }
    vdnum++;
    $.get(url,function(vdurl_data,status){
        if (status==status) {
            $("#msg").html("成功获取数据，正在加载中，请稍候！");
            vdurl = vdurl_data;
            player.src = vdurl;
            console.log(vdurl);
            if (gi==0) {
            	$("#love_btn").attr('src','./img/loves.png');
            } else {
            	$("#love_btn").attr('src','./img/love.png');
            }
            if (vdurl_arr.indexOf(vdurl) >= 1) {//相同播放链接,重新加载
            	$("#msg").html("相同播放链接,正在重新加载，请稍候！");
            	layer.msg('相同播放链接,正在重新加载，请稍候！', {icon: 16,shadeClose: true,});
				pass();
            	return;
			}
			console.log(vdurl_arr.indexOf(vdurl));
            player.onstalled = function() {//媒体数据不可用,重新加载
            	$("#msg").html("媒体数据通信失败,正在重新加载，请稍候！");
            	layer.msg('媒体数据通信失败,正在重新加载，请稍候！', {icon: 16,shadeClose: true,});
            	pass();
            	return;
			};
            if(vdurl.indexOf("M3U8") >= 0 || vdurl.indexOf("m3u8") >= 0 || vdurl.indexOf("jpg") >= 0) {//m3u8格式判断，注意PC端不可用，如需pc端支持，需加载HLS.JS或者其他支持插件服务
            	layer.closeAll();
                $("#logo_img").hide();
            	$("#logo_imgs").hide();
                if (textstf==true) {
                    $("#texts").show();
                }else{
                    $("#texts").hide();
                }
                $("#love_btn").hide();
                $("#msg").html("数据正常加载完毕，执行播放事件中！");
	            player.play();
	            vdurl_arr.unshift(vdurl);
	            console.log(vdurl_arr);
            }else{
            	$.ajax({url: vdurl,type: 'GET',complete: function(response) {
					if(response.status != 200) {//测试链接通信状态
						$("#msg").html("媒体数据通信失败,正在重新加载，请稍候！");
						layer.msg('媒体数据通信失败,正在重新加载，请稍候！', {icon: 16,shadeClose: true,});
						pass();
					}else{
						layer.closeAll();
                        $("#logo_img").hide();
						$("#logo_imgs").hide();
                        if (textstf==true) {
                            $("#texts").show();
                        }else{
                            $("#texts").hide();
                        }
						$("#love_btn").show();
		                $("#msg").html("数据正常加载完毕，执行播放事件中！");
		                player.play();
		                vdurl_arr.unshift(vdurl);
		                console.log(vdurl_arr);
	                }
				}});
            }
        } else {
        	$("#msg").html("读取失败，正在重新发起请求，请稍候！");
            pass();
        }
    });
}
//历史链接播放
function playold() {
    player.src = vdurlold[0];
    vdurlold.shift();
    if (vdurlold[0] != null) {
        player.play();
        $("#msg").html("正在努力加载历史播放数据，请稍候！");
        $("#love_btn").attr('src','./img/loves.png');
	    if(vdurlold[0].indexOf("M3U8") >= 0 || vdurlold[0].indexOf("m3u8") >= 0) {
	        $("#love_btn").hide();
	    }else{
	        $("#love_btn").show();
	    }
    }else{
    	layer.msg("亲，您的历史播放记录已经全部观看完了，<br>正在重新发起请求，请稍候！", {icon: 0});
    	$("#msg").html("读取完毕，正在重新发起请求，请稍候！");
        pass();
    }
}
//账户登录
function login(){
	layer.prompt({title: '请输入您的账户名，并确认'}, function(val, index){
		layer.close(index);
		$.post("login.php",{username:val},function(login_data,status){
			login_data = JSON.parse(login_data);
			if (login_data.status == "YES") {
        		$.cookie('user', val);
                $("#userid").html('@'+val);
        		layer.msg(login_data.message, {icon: 6});
		    }else{
		    	layer.msg(login_data.message, {icon: 5});
        	} 
        });
	});
}
//点击屏幕事件
$("#player").click(function(){
    if (player.paused) {
    	$("#logo_img").hide();
        player.play();
        $("#msgs").hide();
        if (textstf==true) {
            $("#texts").show();
        }else{
            $("#texts").hide();
        }
    } else {
    	$("#logo_img").show();
        player.pause();
        $("#texts").show();
        $("#msgs").show();
    }
});
$("#logo_img").click(function(){
    if (player.paused) {
    	$("#logo_img").hide();
        player.play();
    } else {
    	$("#logo_img").show();
        player.pause();
    }
});
$("#logo_img").dblclick(function(){
    toggleFullScreen();
});
$("#player").dblclick(function(){
    toggleFullScreen();
});
//进入全屏，建议使用EDGE浏览器
function toggleFullScreen() {
	if (!document.fullscreenElement &&
		!document.mozFullScreenElement && !document.webkitFullscreenElement) {
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}
</script>
<script>
//触摸屏幕手势
var startx, starty; //获得角度
function getAngle(angx, angy) {
	return Math.atan2(angy, angx) * 180 / Math.PI;
};
function getDirection(startx, starty, endx, endy) { //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
	var angx = endx - startx;
	var angy = endy - starty;
	var result = 0;
	if (Math.abs(angx) < 2 && Math.abs(angy) < 2) { //如果滑动距离太短
		return result;
	}
	var angle = getAngle(angx, angy);
	if (angle >= -135 && angle <= -45) {
		result = 1;
	} else if (angle > 45 && angle < 135) {
		result = 2;
	} else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
		result = 3;
	} else if (angle >= -45 && angle <= 45) {
		result = 4;
	}
	return result;
}
document.addEventListener("touchstart",function(e) { //手指接触屏幕
	startx = e.touches[0].pageX;
	starty = e.touches[0].pageY;
},false);
document.addEventListener("touchend",function(e) { //手指离开屏幕
	var endx, endy;
	endx = e.changedTouches[0].pageX;
	endy = e.changedTouches[0].pageY;
	var direction = getDirection(startx, starty, endx, endy);
	switch (direction) {//1向上 2向下 3向左 4向右 0未滑动
	case 1:
		players();
		break;
	case 2:
		playold();
		break;
	case 3:
		$('#texts').hide();
        textstf = !textstf;
		break;
	case 4:
		$('#texts').show();
        textstf = !textstf;
		break;
	}
},false);
</script>
</html>
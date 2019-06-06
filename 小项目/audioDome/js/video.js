/**
 * @param
 * 封装选择器
 */
function _$(selector) {
    return document.querySelector(selector);
}

let total, //视频总时长
    timer, //计时器
    container = _$(".container"), //容器
    video = _$(".container video"),
    divModel = _$(".container .model"), //蒙层
    divToolsBar = _$(".container .tools_bar"), //工具栏
    iconPlay = _$(".container .icon-bofang1"),  //播放按钮
    progressBar = _$(".container .progress_bar"), //进度条
    progressBarBg = _$(".progress_bar .bar_bg"),  //进度条背景
    progressBarSlider = _$(".progress_bar .slider"), //进度条按钮
    spanDur = _$("#spanDur"),   // 播放时长
    spanTotal = _$("#spanTotal"), //总时长
    volume = _$("#volume"),     //音量控制
    full = _$(".icon-quanping"), //全屏
    mute = _$(".icon-shengyin"), //静音
    toolsPLay = _$(".tools_bar .icon-bofang"), //工具栏播放按钮
    lis = document.querySelectorAll(".icon-weibiaoti-_huaban li[data-value]"); //选中所有倍速播放的li

/**
 * @param
 * 注册事件区域
*/

//蒙层的事件 和 播放图标的点击事件 和 工具栏点击事件
divModel.onclick = iconPlay.onclick = toolsPLay.onclick = function () {
    play()
};

//工具栏整体事件注册, 阻止事件冒泡
divToolsBar.onclick = function (e) {
    var e = window.event || e.event; 
    e.stopPropagation(); //阻止事件冒泡
}
//视频事件
video.ondurationchange = function () {
    total = video.duration;
    setTime();
}
//静音时间
mute.onclick = function() {
    if(volume.value == 0) {
        mute.classList.remove('icon-jingyin');
        mute.classList.add('icon-shengyin');
        video.volume = 50 / 100; // 音量的范围在[0, 1]
        volume.value = 50; 
    }else {
        mute.classList.remove('icon-shengyin');
        mute.classList.add('icon-jingyin');
       video.volume = volume.value = 0;
    }
}
//音量事件
volume.onchange = function() {
    setVolume()
}
//阻止音量大小事件冒泡
volume.onclick = function (e) {
    var e = window.event || e.event;
    e.stopPropagation(); //阻止事件冒泡
}

//全屏事件(未做浏览器兼容处理) 
full.onclick = function () {
    if (document.webkitFullscreenElement) {
        //退出全屏
        document.webkitExitFullscreen();
        debugger;
    }else {
        //进入全屏
        container.webkitRequestFullscreen();
    }
}
//全屏状态事件

container.onfullscreenchange = function () {
    if (document.webkitFullscreenElement) {
        hideBar()
    }else {
        if(timer) {
            clearTimeout(timer)
        }
        divToolsBar.style.display = "";
        divModal.style.cursor = "";
    }
}
container.onmousemove = function () {
    if (document.webkitFullscreenElement) {
        hideBar();
    }
    hideBar();
}

//进度条位置改变
video.ontimeupdate = function () {
    setTime();
    setProgress();
}
//拖拽进度条
progressBar.onmousedown = function (e) {
    // setCurrentTime(e);
    divModel.onmousemove = function (e) {
        setCurrentTime(e);
    }
    divModel.onmouseup = divModel.onmouseleave = function () {
        divModel.onmousemove = undefined;
    }
}

//倍速播放
for(let i = 0; i < lis.length; i ++ ) {
    lis[i].onclick = function () {
        setRate(this.dataset.value)
    }
}


/**
 * @param
 * 工具方法
 * 
*/
function getTime(seconds) {
    seconds = parseInt(seconds);
    let h = Math.floor(seconds / 3600); //小时部分
    let m = Math.floor((seconds - h * 3600) / 60); //分钟部分 
    if(m < 10) {
        m = "0" + m;
    }
    let s = seconds - h * 3600 - m * 60; //秒的部分
    if(s < 10) {
        s = "0" + s;
    }
    return h + ":" + m + ":" + s
}

//设置时长
function setTime() {
    let nowTime = getTime(video.currentTime);
    let totalTime = getTime(total);
    spanDur.innerHTML = nowTime;
    spanTotal.innerHTML = totalTime;
}

//播放和暂停
function play () {
    if (video.paused) {
        //播放
        video.play()
        divModel.classList.remove("pause");
        iconPlay.classList.remove("icon-bofang1");
        iconPlay.classList.add("icon-zanting1");

        toolsPLay.classList.remove("icon-bofang");
        toolsPLay.classList.add("icon-zanting");
    } else {
        //暂停
        video.pause();
        divModel.classList.add("pause");
        iconPlay.classList.add("icon-bofang1");
        iconPlay.classList.remove("icon-zanting1");
        
        toolsPLay.classList.remove("icon-zanting");
        toolsPLay.classList.add("icon-bofang");
    }
}
//调整音量
setVolume();
function setVolume(){
    return video.volume = volume.value / 100; 
}
//全屏

function hideBar() {
    divToolsBar.style.display = "block";
    divModel.style.display = "block";
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        divToolsBar.style.display = "none";
        divModel.style.display = "none";
    }, 2000);
}
function setProgress() {
    let precent = video.currentTime / total * 100;
    progressBarBg.style.width = precent + "%";
    progressBarSlider.style.left = precent + "%";
}
 
//设置视频播放进度
let rect = divModel.getBoundingClientRect(); //获取一个元素的矩形区域
function setCurrentTime(e) {
   let offSetX = e.pageX - rect.left;
   //当前设置的时间 = 偏移的X / 总时长 * 总宽度
   video.currentTime = offSetX / divModel.clientWidth * total;
}
//倍速播放
function setRate(val) {
    video.playbackRate = val;
    for(let i = 0; i < lis.length; i ++) {
        let item = lis[i]
        item.dataset.value == val ? item.classList.add('active') : item.classList.remove('active');
    }
}
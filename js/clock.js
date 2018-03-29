function clock(){

    var now = new Date();

    // 2018/03/29/木/15:55:34
    
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var weeks = ["日", "月", "火", "水", "木", "金", "土"];
    var day = weeks[now.getDay()];
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // var milliseconds = now.getMilliseconds();
    
    var time = document.getElementById("js-digital_clock");
    
    time.innerHTML = year + "/" + month + "/" + date + "(" + day + ")" + " " + hours + ":" + minutes + ":" + seconds + " " /*+  milliseconds*/;
        
}

setInterval(clock, 10);
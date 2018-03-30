var btn = document.getElementById("btn");

var start_time = (new Date()).getTime(), 
    end_time = (new Date()).getTime();

updateStopWatch();

btn.addEventListener("click", function(){
    var timer = setInterval(function(){
        updateStopWatch();
        if (done()) clearInterval(timer);
    }, 25);
})

//--------------------------------------------------

// 数値の桁数を設定（0埋め）
function zeroFill(num, min_digits){
    var pad = min_digits - (num + '').length;
    if (pad > 0) {
        return '0'.repeat(pad) + num;
    }
    return num;
}

// タイマー更新
function updateStopWatch(){
    end_time = (new Date()).getTime();

    var elapsed = end_time - start_time;
    
    var min = Math.floor(elapsed / 1000 / 60); 
    var sec = Math.floor(elapsed / 1000 % 60);
    var msec = (elapsed + '').slice(-3, -1);
    
    document.getElementById("js-digital_clock").innerHTML = [
        zeroFill(min, 2),
        zeroFill(sec, 2),
        zeroFill(msec, 2)
    ].join(':');
}

// 完了チェック
function done(){
    return document.getElementById("pipimi").innerHTML.endsWith("ポプテピピック");
}

function StopWatch(options){
    this._start = null;
    this._interval = null;
    this.time = '00:00:00';
    this.duration = options.duration || 500;
    this.customFn = options.customFn || function(){};
    this.customFn(this);
}

StopWatch.prototype._now = function(){
    return (new Date()).getTime();
}

StopWatch.prototype._format = function(ms){
    var secs = ms / 1000;
    var sec = Math.floor(secs % 60);
    var min = Math.floor(secs / 60);
    var msec = (ms + '').slice(-3, -1);

    return [
        ('0' + min).slice(-2),
        ('0' + sec).slice(-2),
        msec
    ].join(':');
}

StopWatch.prototype.start = function(){
    this._start = this._now();
    this._interval = setInterval(function(sw){
        sw.time = sw._format(sw._now() - sw._start);
        sw.customFn(sw);
    }, this.duration, this);
}

StopWatch.prototype.stop = function(){
    clearInterval(this._interval);
}


var options = {
    duration: 25,
    customFn: function(sw){
        document.getElementById("js-digital_clock").innerHTML = sw.time;
        if (document.getElementById("pipimi").innerHTML.endsWith("ポプテピピック")){
            sw.stop();
        }
    }
};

var SW = new StopWatch(options);

document.getElementById("btn").addEventListener("click", function(){
    SW.start();
});
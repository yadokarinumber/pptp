// 配列宣言
var array = ["ポ", "プ", "テ", "ピピック"];
var btn = document.getElementById("btn");
var pipimi = document.getElementById("pipimi");
var popuko = document.getElementById("popuko");


function push(){

    function add(){

        var random = Math.floor(Math.random() * array.length);  // スコープ外だとNG
        pipimi.innerHTML += array[random];
        var longWord = pipimi.innerHTML; // 変数に入れたほうが良いの？

        if(longWord.endsWith("ポプテピピック")){
            popuko.innerHTML = "end";
            clearInterval(start);
        }
    };

    var start = setInterval(add, 10);
}

var a = btn.addEventListener("click", push)
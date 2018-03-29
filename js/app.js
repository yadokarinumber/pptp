// 配列宣言
var array = ["ポ", "プ", "テ", "ピピック"];

var pipimi = document.getElementById("pipimi");
var popuko = document.getElementById("popuko");

var add = function(){

    var random = Math.floor(Math.random() * array.length);  // スコープ外だとNG
    pipimi.innerHTML += array[random];
    var longWord = pipimi.innerHTML;

    if(longWord.endsWith("ポプテピピック")){
        popuko.innerHTML = "end";
        clearInterval(start);
    }
};

var start = setInterval(add, 10);
function push(){

    // 配列宣言
    var array = ["ポ", "プ", "テ", "ピピック"];
    var btn = document.getElementById("btn");
    var pipimi = document.getElementById("pipimi");
    var popuko = document.getElementById("popuko");

    function add(){

        var random = Math.floor(Math.random() * array.length);  // スコープ外だとNG
        pipimi.innerHTML += array[random];
        var longWord = pipimi.innerHTML; // 変数に入れたほうが良いの？

        if(longWord.endsWith("ポプテピピック")){
            clearInterval(start);
            popuko.innerHTML = "end";
        }
    };

    var start = setInterval(add, 10);
}

btn.addEventListener("click", push)
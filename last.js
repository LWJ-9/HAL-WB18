// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function () {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("info.json", function (text) {
//     var json = JSON.parse(text);
//     console.log(json);
// });

let json = {
    "01": "初めて作成したサイトです！\r\n なんだwebってめちゃ簡単じゃん！",
    "02": "テーブルを練習した\r\n なんだwebって色んなことが出来るじゃん！",
    "03": "リストを練習した\r\n なんだwebって手間がかかるじゃん！",
    "04": "自己紹介サイトを作りました\r\n なんだ俺って発想がめちゃ簡単じゃん！",
    "05": "日本の観光地サイトを作りました\r\n なんだwebってオーソドックスなものも悪くないじゃん！",
    "06": "floatを練習した\r\n なんだwebってこんな便利な手法もあるじゃん！",
    "07": "positionを練習した\r\n なんだwebってそんな難しいものでもないじゃん！",
    "08": "javascriptを練習した\r\n なんだwebって動きもつけれるじゃん！",

};

function SiteFunc(para) {

    for (let key in para) {
        this[key] = para[key];
    }
    this.alert = arg => alert(this[arg]);
}

class SiteClass {

    constructor(para) {
        for (let key in para) {
            this[key] = para[key];
        }
    }

    alert(num) {
        alert(this[num]);
    }

}

let siteFromFunc = new SiteFunc(json);

//! siteFromFunc.alert('01');



let siteFromClass = new SiteClass(json);

//! siteFromClass.alert('01');


console.log(siteFromFunc);//! alert fuc in new object

console.log(siteFromClass);//! alert fuc in prototype

console.log(siteFromFunc == siteFromClass); //! false

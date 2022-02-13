var str = location.search;
str = str.substring(1);
const myArr = str.split("&");

const newarr = [];
for (var i = 0; i < myArr.length; i++) {
    var value = myArr[i].split("=");

    newarr.push(value);
}
nm = newarr[0][1].split("+");
nam = nm[0] + " " + nm[1];

document.write("<h1>welcome " + nam + "</h1><br>");
var x = Math.floor(Math.random() * myArr.length);
if (x == 0) {
    x = 1;
}
document.write("your " + newarr[x][0] + " is: " + newarr[x][1]);
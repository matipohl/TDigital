function solution(str) {
    var strr = [];

    for (var i = str.length - 1; i >= 0; i--) {
        strr.push(str[i]);
    }

    return strr.join("");
}
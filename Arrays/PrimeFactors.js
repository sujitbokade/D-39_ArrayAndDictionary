const prompt = require("prompt-sync")();
var n = prompt("Enter a Number");
for (var i = 2; i <= n; i++) {
    while (n % i == 0) {
        console.log(i);
        n = n/i;
    }
}
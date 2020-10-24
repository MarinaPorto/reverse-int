module.exports = function reverse(n) {

    if (n < 0) {
        n = n * (-1);
    }
    let result = 0;
    while (n) {
        result = result * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

module.exports = function reverse(n) {
    let strN = String(n);
    let i = strN.length - 1;
    let result = '';
    if (n < 0) {
        while (i > 0) {
            result = `${result}${Number(strN[i])}`;
            i = i - 1;
        }
        return result;
    } else {
        while (i >= 0) {
            result = `${result}${Number(strN[i])}`;
            i = i - 1;
        }
        return result;
    }
};
module.exports = function check(str, bracketsConfig) {
    let gg = str;
    bracketsConfig.forEach(() => {bracketsConfig.forEach(() => { bracketsConfig.forEach(
        e => {
            while (gg.indexOf(e[0] + e[1])>=0) {
                gg = gg.replace(e[0] + e[1], "");
            }
        }
    );});});
    return gg.length === 0;
}

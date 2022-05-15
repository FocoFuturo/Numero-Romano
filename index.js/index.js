var romanToInt = function (s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        let next = s[i + 1];
        if (map[cur] < map[next]) {
        res -= map[cur];
        } else {
        res += map[cur];
        }
    }
    return res;
    };
    console.log(romanToInt("MCMXCIV"));
    console.log(romanToInt("MCMXC"));
    console.log(romanToInt("MCM"));
    console.log(romanToInt("MCMLXVII"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    console.log(romanToInt("MCMLXIX"));
    
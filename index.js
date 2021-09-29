const infoArray = require('./info');
const cowSay = require('cowsay');


console.log(cowSay.say({
    text : `Hi, my name is ${infoArray.name} and I come from to ${infoArray.campus} !`,
    e : "oO", // e mean cow's eyes
    T : "Y " // t mean cow's tong
})); 





const infoArray = require('./info');
const cowSay = require('cowsay');


console.log(cowSay.say({
    text : "Olaa Sapapaya",
    e : "oO", // e mean cow's eyes
    T : "Y " // t mean cow's tong
}) + `Hi, my name is ${infoArray.user.name} and I come from to ${infoArray.user.campus} !`); 





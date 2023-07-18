
const userInfo = require('./information');
// console.log(`Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus} campus`);


const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus} campus`,
    e: "oO",
    T: "U "
}));



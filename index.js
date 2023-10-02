let infos = require(`./information.js`)

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${infos.name} and I'm in the ${infos.campus} campus !`,
    e : "oO",
    T : "U "
}));
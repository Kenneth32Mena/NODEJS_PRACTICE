const lodash = require('lodash');
function RandomNumber(x,y){
    console.log(`Su numero aleatorio es ${lodash.random(x,y)}`)
}
module.exports = {
    RandomNumber
};
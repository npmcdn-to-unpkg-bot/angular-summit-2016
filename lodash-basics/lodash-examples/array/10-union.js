var _ = require('lodash');


var one = [ 1, 2, 3, 4, 5];
var two = [ 6, 7, 8, 9, 10];
var three = [ 11, 12, 13, 14, 15 ];

var both = _.union(one, two, three);

console.log(both);
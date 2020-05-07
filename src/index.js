// Datatype methods:
exports.is = require('./is');

// About methods:
exports.equal = require('./equal');
exports.size = require('@extra-iterable/size');
exports.first = require('@extra-iterable/first');
exports.middle = require('@extra-iterable/middle');
exports.last = require('@extra-iterable/last');
exports.keys = require('./keys');
exports.values = require('./values');

// Search methods:
exports.keyOf = require('./key-of');
exports.keysOf = require('./keys-of');
exports.includes = require('./includes');

// Transform methods:
exports.join = require('./join');
exports.concat = require('@extra-iterable/concat');

// Functional methods:
exports.forEach = require('./for-each');
exports.some = require('./some');
exports.every = require('./every');
exports.find = require('./find');
exports.findKey = require('./find-key');
exports.findAll = require('./find-all');
exports.findAllKeys = require('./find-all-keys');
exports.reduce = require('./reduce');
exports.filter = require('./filter');
exports.map = require('./map');

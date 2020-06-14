function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
const isIterable = is;
function isEntries(a) {
  if(!isIterable(a)) return false;
  for(var v of a)
    if(!Array.isArray(v)) return false;
  return true;
}
function equal(ea, eb) {
  var ma = new Map(ea);
  for(var e of eb)
    if(ma.get(e[0])!==e[1] || !ma.delete(e[0])) return false;
  return ma.size===0;
}
function size(itr) {
  var z = 0;
  if(itr.size!=null) return itr.size;
  if(itr.length!=null) return itr.length;
  for(var v of itr)
    z++;
  return z;
}
function first(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
}
function first5(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
}
function last(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
}
const first7 = first5;
function middle(itr, idx=0) {
  return idx<0? last(itr, idx):first7(itr, idx);
}
function last8(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
}
function keys(ent) {
  var i = 0, z = [];
  for(var e of ent)
    z[i++] = e[0];
  return z;
}
function values(ent) {
  var i = 0, z = [];
  for(var e of ent)
    z[i++] = e[1];
  return z;
}
function keyOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return e[0];
  }
}
function keysOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) z[z0++] = e[0];
  }
  return z;
}
function includes(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return true;
  }
  return false;
}
function join(ent, fmt='%k=%v', sep=',', idx=0, val=null, v0=Array.isArray(val)? val.length:0, bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += fmt.replace(/%i/g, idx++).replace(/%k/g, e[0]).replace(/%v/g, e[1])+sep;
    if(val!=null) val[v0++] = e[1];
  }
  return z.substr(0, z.length-sep.length);
}
function concat() {
  var z = [], z0 = 0;
  for(var i=0, I=arguments.length; i<I; i++) {
    for(var v of arguments[i])
      z[z0++] = v;
  }
  return z;
}
function forEach(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, e[1], e[0], ent);
  }
}
function some(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return true;
  }
  return false;
}
function every(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!fn.call(ths, e[1], e[0], ent)) return false;
  }
  return true;
}
function find(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[1];
  }
}
function findKey(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[0];
  }
}
function findAll(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[1];
  }
  return z;
}
function findAllKeys(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[0];
  }
  return z;
}
function reduce(ent, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, e[1], e[0], ent):e[1];
  }
  return acc;
}
function filter(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e;
  }
  return z;
}
function map(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = [e[0], fn.call(ths, e[1], e[0], ent)];
  }
  return z;
}
// Datatype methods:
exports.is = isEntries;

// About methods:
exports.equal = equal;
exports.size = size;
exports.first = first;
exports.middle = middle;
exports.last = last8;
exports.keys = keys;
exports.values = values;

// Search methods:
exports.keyOf = keyOf;
exports.keysOf = keysOf;
exports.includes = includes;

// Transform methods:
exports.join = join;
exports.concat = concat;

// Functional methods:
exports.forEach = forEach;
exports.some = some;
exports.every = every;
exports.find = find;
exports.findKey = findKey;
exports.findAll = findAll;
exports.findAllKeys = findAllKeys;
exports.reduce = reduce;
exports.filter = filter;
exports.map = map;

function equal(ea, eb) {
  var ma = new Map(ea);
  for(var e of eb)
    if(ma.get(e[0])!==e[1] || !ma.delete(e[0])) return false;
  return ma.size===0;
};
function every(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!fn.call(ths, e[1], e[0], ent)) return false;
  }
  return true;
};
function filter(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e;
  }
  return z;
};
function find(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[1];
  }
};
function findAll(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[1];
  }
  return z;
};
function findAllKeys(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[0];
  }
  return z;
};
function findKey(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[0];
  }
};
function forEach(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, e[1], e[0], ent);
  }
};
function includes(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return true;
  }
  return false;
};
function is(a) {
  if(!is20(a)) return false;
  for(var v of a)
    if(!Array.isArray(v)) return false;
  return true;
};
function join(ent, fmt='%k=%v', sep=',', idx=0, val=null, v0=Array.isArray(val)? val.length:0, bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += fmt.replace(/%i/g, idx++).replace(/%k/g, e[0]).replace(/%v/g, e[1])+sep;
    if(val!=null) val[v0++] = e[1];
  }
  return z.substr(0, z.length-sep.length);
};
function keyOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return e[0];
  }
};
function keys(ent) {
  var i = 0, z = [];
  for(var e of ent)
    z[i++] = e[0];
  return z;
};
function keysOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) z[z0++] = e[0];
  }
  return z;
};
function map(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = [e[0], fn.call(ths, e[1], e[0], ent)];
  }
  return z;
};
function reduce(ent, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, e[1], e[0], ent):e[1];
  }
  return acc;
};
function some(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return true;
  }
  return false;
};
function values(ent) {
  var i = 0, z = [];
  for(var e of ent)
    z[i++] = e[1];
  return z;
};
function concat() {
  var z = [], z0 = 0;
  for(var i=0, I=arguments.length; i<I; i++) {
    for(var v of arguments[i])
      z[z0++] = v;
  }
  return z;
};
function first(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
};
function is20(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
};
function last(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
};
function middle(itr, idx=0) {
  return idx<0? last(itr, idx):first(itr, idx);
};
function size(itr) {
  var z = 0;
  if(itr.size!=null) return itr.size;
  if(itr.length!=null) return itr.length;
  for(var v of itr)
    z++;
  return z;
};
exports.equal = equal;
exports.every = every;
exports.filter = filter;
exports.find = find;
exports.findAll = findAll;
exports.findAllKeys = findAllKeys;
exports.findKey = findKey;
exports.forEach = forEach;
exports.includes = includes;
exports.is = is;
exports.join = join;
exports.keyOf = keyOf;
exports.keys = keys;
exports.keysOf = keysOf;
exports.map = map;
exports.reduce = reduce;
exports.some = some;
exports.values = values;
exports.concat = concat;
exports.first = first;
exports.last = last;
exports.middle = middle;
exports.size = size;

function findAll(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[1];
  }
  return z;
};
module.exports = findAll;

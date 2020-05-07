function keysOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) z[z0++] = e[0];
  }
  return z;
};
module.exports = keysOf;

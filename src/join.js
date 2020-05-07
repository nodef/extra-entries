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
module.exports = join;

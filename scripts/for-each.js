function forEach(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, e[1], e[0], ent);
  }
};
module.exports = forEach;

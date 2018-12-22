function reduce(ent, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, e[1], e[0], ent):e[1];
  }
  return acc;
};
module.exports = reduce;

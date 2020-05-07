function includes(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return true;
  }
  return false;
};
module.exports = includes;

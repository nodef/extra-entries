function equal(ea, eb) {
  var ma = new Map(ea);
  for(var e of eb)
    if(ma.get(e[0])!==e[1] || !ma.delete(e[0])) return false;
  return ma.size===0;
};
module.exports = equal;

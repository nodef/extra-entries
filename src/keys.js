function keys(ent) {
  var i = 0, z = [];
  for(var e of ent)
    z[i++] = e[0];
  return z;
};
module.exports = keys;

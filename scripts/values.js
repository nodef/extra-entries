function values(ent) {
  var i = 0, z = [];
  for(var e of ent)
    z[i++] = e[1];
  return z;
};
module.exports = values;

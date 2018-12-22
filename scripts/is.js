const iterable = require('@extra-iterable/is');
function is(a) {
  if(!iterable(a)) return false;
  for(var v of a)
    if(!Array.isArray(v)) return false;
  return true;
};
module.exports = is;

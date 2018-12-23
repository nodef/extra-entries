const isIterable = require('@extra-iterable/is');
function isEntries(a) {
  if(!isIterable(a)) return false;
  for(var v of a)
    if(!Array.isArray(v)) return false;
  return true;
};
module.exports = isEntries;

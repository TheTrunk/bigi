// FIXME: Kind of a weird way to throw exceptions, consider removing
var BigInteger = require('./bigi')

BigInteger.fromBuffer = function(buffer) {
  // BigInteger expects a DER integer conformant byte array
  if (buffer[0] & 0x80) {
    var byteArray = Array.prototype.slice.call(buffer)

    return new BigInteger([0].concat(byteArray))
  }

  return new BigInteger(buffer)
}

var geohash = require('ngeohash')

module.exports = function (pnt1, pnt2, precision) {
  if (!precision) precision = 9

  var a = geohash.encode(pnt1.lat, pnt1.lon, precision)
  var b = geohash.encode(pnt2.lat, pnt2.lon, precision)

  return a === b

}

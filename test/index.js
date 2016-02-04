var test = require('tape')
var equalsLat = require('..')

test('simple equality', function (t) {
  var a = {lat: 49.1382743, lon: -112.38189}
  var b = {lat: 49.1382577, lon: -112.38189}
  t.ok(equalsLat(a, b))
  t.end()
})

test('simple equality, both diff', function (t) {
  var a = {lat: 49.1382743, lon: -112.38188}
  var b = {lat: 49.1382577, lon: -112.38189}
  t.ok(equalsLat(a, b))
  t.end()
})

test('outside difference', function (t) {
  var a = {lat: 48.1382743, lon: -112.38188}
  var b = {lat: 49.1382577, lon: -112.38189}
  t.notOk(equalsLat(a, b))
  t.end()
})

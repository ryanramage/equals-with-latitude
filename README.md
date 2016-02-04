# equals-with-latitude

Compare lat/lon for equality with the latitude for a small difference in values that may occur from geocoding.

Lets say you want to compare two geocoders. They may produce very slight differences in lat/lon, but you want to know they are close to each other.
Use equals-with-latitude!

## Install

    npm i equals-with-latitude --save

## Usage

    var equalsLat = require('equals-with-latitude')

    var a = {lat: 53.298323, lon: -112.38293}
    var b = {lat: 53.298112, lon: -112.38189}

    if (equalsLat(a, b, 13)) console.log('same same')
    else console.log('different')



## API

    function equalsLat (pnt1, pnt2, precision=9)

 - pnt1 an object with lat, lon properties
 - pnt2 an object with lat, lon properties
 - precision - the length of geohash to compare the two points. See [geohash.encode](https://www.npmjs.com/package/ngeohash#geohashencode-latitude-longitude-precision9)


## License

MIT

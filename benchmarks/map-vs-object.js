const Benchmark = require('benchmark');

const object = {};
for (let i = 0; i < 100; ++i) object[String(i)] = i;

const map = new Map();
for (let i = 0; i < 100; ++i) map.set(String(i), i);

new Benchmark.Suite()
  .add('{} ---', () => {
    return [
      object['0'],
      object['70'],
      object['43'],
      object['99'],
      object['84'],
      object['21'],
      object['65'],
      object['17'],
      object['32'],
      object['58'],
    ]
  })
  .add('new Map() ---', () => {
    return [
      map.get('0'),
      map.get('70'),
      map.get('43'),
      map.get('99'),
      map.get('84'),
      map.get('21'),
      map.get('65'),
      map.get('17'),
      map.get('32'),
      map.get('58'),
    ]
  })
  .on('cycle', event => console.log(String(event.target)))
  .run();

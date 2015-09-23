/* global it, before */

import test from 'ava'

test('loads test.dat', function(t) {
  return System.import('./test.dat!raw').then(function (data) {
    t.same(new Uint8Array(data), new Uint8Array([
      114,
      110,
      97,
      100,
      111,
      109,
      32,
      100,
      97,
      116,
      97,
      10,
      105,
      110,
      99,
      108,
      117,
      100,
      101,
      115,
      32,
      110,
      111,
      116,
      32,
      85,
      84,
      70,
      45,
      56,
      32,
      99,
      104,
      97,
      114,
      97,
      99,
      116,
      101,
      114,
      115,
      10,
      226,
      152,
      128,
      10,
      226,
      153,
      142,
      226,
      157,
      164,
      226,
      152,
      130,
      226,
      152,
      173,
      226,
      152,
      142,
      10
    ]))
  })
})

test('loads large.dat', function(t) {
  return System.import('./large.dat!raw').then(function (data) {
    t.same(typeof data, 'object')
  })
})

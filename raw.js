export const build = false

import hctef from 'hctef'

export function fetch (load) {
  return hctef(load.address).then(function(response) {
    return response.arrayBuffer()
  }).then(function(buffer) {
    load.metadata.buffer = buffer
    return ''
  })
}

export function instantiate (load) {
  return load.metadata.buffer
}

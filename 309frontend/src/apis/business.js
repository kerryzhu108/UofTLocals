'use strict'

import { domain, headers } from '../apis/headers.js'

//Gets all approved businesses
export function getBusinesses(bid) {
  return fetch(domain + 'signup', {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      "businessID": bid,
    })
  }).then((response) => { return response; })
}

export function deleteBusiness(bid) {
  fetch('http://localhost:5000/business/delete/' + bid, {
    method: 'DELETE'
  }).then((response) => {
    return response;
  })
}

export function deletePost(bid, pid) {
  fetch('http://localhost:5000/business/delete/' + bid + '/' + pid, {
    method: 'DELETE'
  }).then((response) => {
    return response;
  })
}